package dpla.bws.pdf

import com.sksamuel.scrimage.ImmutableImage
import com.sksamuel.scrimage.nio.JpegWriter
import org.apache.commons.csv.{CSVFormat, CSVRecord}
import org.apache.pdfbox.pdmodel.PDPageContentStream.AppendMode
import org.apache.pdfbox.pdmodel.common.{PDMetadata, PDRectangle}
import org.apache.pdfbox.pdmodel.graphics.color.PDOutputIntent
import org.apache.pdfbox.pdmodel.graphics.image.JPEGFactory
import org.apache.pdfbox.pdmodel.{PDDocument, PDPage, PDPageContentStream}
import org.apache.xmpbox.XMPMetadata
import org.apache.xmpbox.xml.XmpSerializer

import java.awt.color.{ColorSpace, ICC_Profile}
import java.awt.image.{BufferedImage, ColorConvertOp, ColorModel}
import java.io.{ByteArrayOutputStream, File, InputStream}
import java.nio.file.{Files, Paths}
import scala.collection.JavaConversions._

/*
  post-conversion compression with Ghostscript:
  gs -sDEVICE=pdfwrite -dCompatabilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUCE -dQUIET -dBATCH -sOutputFile=out-compressed.pdf out.pdf
 */

object CreatePDF extends App {

  //constants
  val rectangle = PDRectangle.LETTER // default BBox for page built with no constructor params

  val PAGE_WIDTH = rectangle.getWidth
  val PAGE_HEIGHT = rectangle.getHeight
  val THUMB_WIDTH = 400
  val THUMB_HEIGHT = 500
  val JPEG_QUALITY = 81
  val COLOR_PROFILE = ICC_Profile.getInstance(loadColorProfile)

  val inputDir = new File("/home/michael/arc/")
  val tiffsDir = new File(inputDir, "tiffs")
  val pdfsDir = new File(inputDir, "pdfs")
  val thumbnailDir = new File(inputDir, "thumbs")

  val writer: JpegWriter = new JpegWriter()
    .withCompression(JPEG_QUALITY)
    .withProgressive(false) //setting to false to match other thumbnails in project

  val imageLoader = ImmutableImage.loader()
  val colorConvertOp = new ColorConvertOp(null)
  val pages = loadPages
  pages.foreach {

    case (Some(filename), metadatas) =>

      createPDF(
        new File(pdfsDir, s"${filename}.pdf"),
        metadatas
      )

      createThumbnail(
        new File(thumbnailDir, s"${filename}.jpg"),
        metadatas
      )

    case row =>
      println("Skipping row!")
      println(row)
  }

  createMetadataJson(pages)

  println("Done")

  private def createMetadataJson(pages: Map[Option[String], Seq[CreatePDF.Metadata]]): Unit = {
    // TODO
  }

  private def createThumbnail(outputFile: File, metadatas: Seq[Metadata]): Unit = {
    if (outputFile.exists()) return
    println("Writing thumbnail: " + outputFile.getPath)

    imageLoader
      .fromFile(new File(tiffsDir, metadatas.head.filename + ".tiff"))
      .fit(THUMB_WIDTH, THUMB_HEIGHT)
      .output(writer, outputFile)
  }

  private def createPDF(outputFile: File, metadatas: Seq[Metadata]): Unit = {

    if (outputFile.exists()) return

    println("Building " + outputFile.getPath)

    val doc = new PDDocument()

    for (metadata <- metadatas)
      addImagePage(doc, new File(tiffsDir, metadata.filename + ".tiff").getPath )

    // PDF Metadata
    val metadata = metadatas.head
    val xmp = XMPMetadata.createXMPMetadata()
    val dc = xmp.createAndAddDublinCoreSchema()
    dc.setTitle(metadata.title)
    dc.addTitle(null, metadata.altTitle)
    dc.addCreator(metadata.creator)
    dc.setCoverage(metadata.created)
    dc.setDescription(metadata.description)
    dc.addSubject(metadata.subject)
    dc.addType(metadata.`type`)
    dc.addLanguage(metadata.language)
    dc.addRights(null, metadata.edmRights)
    dc.setSource("Clarie Collins Harvey Papers")
    dc.addPublisher("Clarie Collins Harvey Papers, Amistad Research Center, New Orleans, LA")

    val id = xmp.createAndAddPFAIdentificationSchema()
    id.setPart(1)
    id.setConformance("B")

    val serializer = new XmpSerializer()
    val byteArrayOutputStream = new ByteArrayOutputStream()
    serializer.serialize(xmp, byteArrayOutputStream, true)
    val pdMetadata = new PDMetadata(doc)
    pdMetadata.importXMPMetadata(byteArrayOutputStream.toByteArray)
    doc.getDocumentCatalog.setMetadata(pdMetadata)

    //color profile
    val intent = new PDOutputIntent(doc, loadColorProfile)
    intent.setInfo("sRGB IEC61966-2.1")
    intent.setOutputCondition("sRGB IEC61966-2.1")
    intent.setOutputConditionIdentifier("sRGB IEC61966-2.1")
    intent.setRegistryName("http://www.color.org")
    doc
      .getDocumentCatalog
      .addOutputIntent(intent)
    doc.save(outputFile.getPath)
    doc.close()
  }

  private def addImagePage(doc: PDDocument, path: String): Unit = {
    println("Adding page for image " + path)
    //loop over pages
    val page = new PDPage()
    doc.addPage(page)

    val inputBufferedImage = imageLoader
      .fromFile(new File(path))
      .resizeToRatio(PAGE_WIDTH/PAGE_HEIGHT)
      .awt()

    val sRgbBufferedImage = colorConvertOp.createCompatibleDestImage(inputBufferedImage, ColorModel.getRGBdefault)//new BufferedImage(inputBufferedImage.getWidth, inputBufferedImage.getHeight, BufferedImage.TYPE_INT_RGB)
    colorConvertOp.filter(inputBufferedImage, sRgbBufferedImage)

    val floatQuality = (JPEG_QUALITY / 100.0f)
    val pdImage = JPEGFactory.createFromImage(doc, sRgbBufferedImage, floatQuality)

    val contentStream = new PDPageContentStream(doc, page, AppendMode.APPEND, true, true)
    //contentStream.drawImage(pdImage, offsetX, offsetY, pdImage.getWidth * scale, pdImage.getHeight * scale)
    contentStream.drawImage(pdImage, 0, 0, PAGE_WIDTH, PAGE_HEIGHT)
    contentStream.close()
  }

  // csv fields:
  // 0 file id,
  // 1 Title,
  // 2 Alternate title,
  // 3 Creator,
  // 4 Date created,
  // 5 Part Number [volume],
  // 6 Part Title [volume],
  // 7 Part Number [issue],
  // 8 Part Title [issue],
  // 9 Description,
  // 10 Collection,
  // 11 isShownAt [ARC URL],
  // 12 Data provider [ARC],
  // 13 Publisher,
  // 14 Contributor,
  // 15 Subject,
  // 16 Coverage (temporal),
  // 17 Type,
  // 18 Format,
  // 19 Language,
  // 20 Persistent identifier [DPLA id],
  // 21 Rights,
  // 22 Rights statement,
  // 23 Source,
  // 24 Relation,
  // 25 Identifier,
  // 26 Thumbnail [not req. for text],
  // 27 Part Name 1,

  private def rowToMetadata(row: CSVRecord) = {
    Metadata(
      row.get(0),
      row.get(1),
      row.get(2),
      row.get(3),
      row.get(4),
      row.get(9),
      row.get(10),
      row.get(15),
      row.get(17),
      row.get(18),
      row.get(19),
      row.get(22)
    )
  }

  case class Metadata(
                       filename: String,
                       title: String,
                       altTitle: String,
                       creator: String,
                       created: String,
                       description: String,
                       collection: String,
                       subject: String,
                       `type`: String,
                       format: String,
                       language: String,
                       edmRights: String
                     )

  private def loadPages: Map[Option[String], Seq[Metadata]] = {
    val reader = Files.newBufferedReader(Paths.get("/home/michael/arc/metadata.csv"))
    val csv = CSVFormat.DEFAULT.parse(reader)

    val records = csv.getRecords
    val metadatas = records.map(row => rowToMetadata(row))

    val filenameRegexp = "(hacc\\d{4})".r
    metadatas.groupBy(md => filenameRegexp.findFirstIn(md.filename))
  }

  def loadColorProfile: InputStream =
    CreatePDF
      .getClass
      .getResourceAsStream("/sRGB2014.icc")

}

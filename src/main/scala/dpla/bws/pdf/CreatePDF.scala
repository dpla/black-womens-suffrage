package dpla.bws.pdf

import org.apache.pdfbox.pdmodel.graphics.image.{JPEGFactory, LosslessFactory, PDImageXObject}

import javax.imageio.ImageIO
import org.apache.pdfbox.pdmodel.PDPageContentStream.AppendMode
import org.apache.pdfbox.pdmodel.{PDDocument, PDPage, PDPageContentStream}
import org.apache.pdfbox.pdmodel.common.{PDMetadata, PDRectangle}
import org.apache.pdfbox.pdmodel.graphics.color.PDOutputIntent
import org.apache.xmpbox.XMPMetadata
import org.apache.xmpbox.xml.XmpSerializer
import java.awt.color.ICC_ColorSpace
import java.awt.image.BufferedImage
import java.awt.image.ColorConvertOp


import java.awt.color.ICC_Profile
import java.io.{ByteArrayOutputStream, File}

object CreatePDF extends App {

  def loadColorProfile =
    CreatePDF
      .getClass
      .getResourceAsStream("/sRGB2014.icc")


  //constants
  val JPEG_QUALITY = .91f
  val rectangle = PDRectangle.LETTER // default BBox for page built with no constructor params
  val PAGE_WIDTH = rectangle.getWidth
  val PAGE_HEIGHT = rectangle.getHeight
  val COLOR_PROFILE = ICC_Profile.getInstance(loadColorProfile)

  val outFilePath = "out.pdf"

  val doc = new PDDocument()

  addImagePage(
    doc,
    "/home/michael/Downloads/amistad-research-center/DPLA-subgrant3/hacc0379.tiff"
  )
  addImagePage(
    doc,"/home/michael/Downloads/amistad-research-center/DPLA-subgrant3/hacc0360b.tiff"
  )

  private def addImagePage(doc: PDDocument, path: String): Unit = {
    //loop over pages
    val page = new PDPage()
    doc.addPage(page)

    val inBufferedImage = ImageIO.read(new File(path))


    val cco = new ColorConvertOp(inBufferedImage.getColorModel.getColorSpace, new ICC_ColorSpace(COLOR_PROFILE), null)

    //TODO scale down!
    val sRgbBufferedImage = new BufferedImage(inBufferedImage.getWidth, inBufferedImage.getHeight, BufferedImage.TYPE_INT_RGB)

    cco.filter(inBufferedImage, sRgbBufferedImage)

    val imageWidth = sRgbBufferedImage.getWidth()
    val imageHeight = sRgbBufferedImage.getHeight()

    val horizontalScale = PAGE_WIDTH / imageWidth
    val verticalScale = PAGE_HEIGHT / imageHeight
    val scale = Math.min(verticalScale, horizontalScale)

    val xOffset = (PAGE_WIDTH - (scale * imageWidth)) / 2
    val yOffset = (PAGE_HEIGHT - (scale * imageHeight)) / 2

    val pdImage = JPEGFactory.createFromImage(doc, sRgbBufferedImage, JPEG_QUALITY)//LosslessFactory.createFromImage(doc, bim)

    val contentStream = new PDPageContentStream(doc, page, AppendMode.APPEND, true, true)
    contentStream.drawImage(pdImage, xOffset, yOffset, pdImage.getWidth * scale, pdImage.getHeight * scale)
    contentStream.close()
  }

  // PDF Metadata
  val xmp = XMPMetadata.createXMPMetadata()
  val dc = xmp.createAndAddDublinCoreSchema()
  dc.setTitle(outFilePath)

  val id = xmp.createAndAddPFAIdentificationSchema()
  id.setPart(1)
  id.setConformance("B")

  val serializer = new XmpSerializer()
  val baos = new ByteArrayOutputStream()
  serializer.serialize(xmp, baos, true)
  val metadata = new PDMetadata(doc)
  metadata.importXMPMetadata(baos.toByteArray)
  doc.getDocumentCatalog.setMetadata(metadata)

  //color profile


  val intent = new PDOutputIntent(doc, loadColorProfile)
  intent.setInfo("sRGB IEC61966-2.1")
  intent.setOutputCondition("sRGB IEC61966-2.1")
  intent.setOutputConditionIdentifier("sRGB IEC61966-2.1")
  intent.setRegistryName("http://www.color.org")
  doc
    .getDocumentCatalog
    .addOutputIntent(intent)

  System.out.println("SAVE")
  doc.save(outFilePath)
  doc.close()
}

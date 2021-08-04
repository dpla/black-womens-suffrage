package dpla.bws.pdf

import org.apache.pdfbox.pdmodel.graphics.image.LosslessFactory

import javax.imageio.ImageIO
import java.awt.image.BufferedImage
import org.apache.pdfbox.pdmodel.PDPageContentStream.AppendMode
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject
import org.apache.pdfbox.pdmodel.{PDDocument, PDPage, PDPageContentStream}
import org.apache.pdfbox.pdmodel.common.PDMetadata
import org.apache.pdfbox.pdmodel.graphics.color.PDOutputIntent
import org.apache.xmpbox.XMPMetadata
import org.apache.xmpbox.xml.XmpSerializer

import java.io.{ByteArrayOutputStream, File}

object CreatePDF extends App {

  val tiffPath = "/Users/michael/amistad/tiffs/hacc0091a.tiff"
  val outFilePath = "out.pdf"

  val doc = new PDDocument()

  //loop over pages
  val bim = ImageIO.read(new File(tiffPath))
  val pdImage = LosslessFactory.createFromImage(doc, bim)
  val page = new PDPage()
  doc.addPage(page)
  val scale = 1f
  val contentStream = new PDPageContentStream(doc, page, AppendMode.APPEND, true, true)
  contentStream.drawImage(pdImage, 20, 20, pdImage.getWidth * scale, pdImage.getHeight * scale)


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
  val colorProfile = CreatePDF
    .getClass
    .getResourceAsStream("/org/apache/pdfbox/resources/pdfa/sRGB.icc")

  val intent = new PDOutputIntent(doc, colorProfile)
  intent.setInfo("sRGB IEC61966-2.1")
  intent.setOutputCondition("sRGB IEC61966-2.1")
  intent.setOutputConditionIdentifier("sRGB IEC61966-2.1")
  intent.setRegistryName("http://www.color.org")
  doc.getDocumentCatalog.addOutputIntent(intent)

  doc.save(outFilePath);
}

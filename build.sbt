name := "bws-pdfs"

version := "0.1"

scalaVersion := "2.12.12"

libraryDependencies ++= Seq(
  "org.apache.pdfbox" % "pdfbox" % "2.0.22",
  "org.apache.pdfbox" % "xmpbox" % "2.0.24",
  // "com.github.tototoshi" %% "scala-csv" % "1.3.8"
  "org.apache.commons" % "commons-csv" % "1.7",
  "com.sksamuel.scrimage" % "scrimage-core" % "4.0.22",
  "com.sksamuel.scrimage" %% "scrimage-scala" % "4.0.22"

)


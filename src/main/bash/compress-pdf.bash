#!/bin/bash

# requires that Ghostscript (gs) is installed and on PATH

inDir=$1
outDir=$2

for pdf in $inDir/*.pdf; do
  filename=$(basename $pdf)
#  echo "$pdf"
#  echo "$outDir/$filename"
  gs -sDEVICE=pdfwrite -dCompatabilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile="$outDir/$filename" "$pdf"
done
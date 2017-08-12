// Anticipated command-line usage node readText.js dataFile

console.log("Reading file:", process.argv[2]);

let fs = require('fs');
const DATA = process.argv[2];
let letterCount = 0;
let lineCount = 0;
let lineTexts = [];
let lineText = "";

fs.readFile(DATA, 'utf8', function(err, contents) {
    for (letterCount; letterCount <= contents.length; letterCount++) {
      if (contents[letterCount] !== '\n') {
        lineText = lineText + contents[letterCount];
        //console.log(lineText);
        // No '\n' but at the file's end
        if (letterCount === contents.length - 1) {
          lineTexts.push(lineText);
          }

        } else {
        console.log(lineText);
        lineCount += 1;
        lineTexts.push(lineText);
        lineText = "";
      }
    }
    //console.log("Number of lines:", lineCount);
    console.log("Contents:", lineTexts);
    console.log("Count in Array:", lineTexts.length);
  })

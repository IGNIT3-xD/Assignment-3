/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (fileName[0].includes('#') || fileName.slice(-4) === '.pdf' || fileName.slice(-5) === ('.docx')) {
    console.log('Store')
}
else {
    console.log('Delete')
}

// Or
if (fileName.startsWith('#') || fileName.endsWith('.pdf') || fileName.endsWith('.docx')) {
    console.log('Store')
}
else {
    console.log('Delete')
}
/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (fileName[0].includes('#') || fileName.endsWith('.pdf') || fileName.endsWith('.docx')) {
    console.log('Store')
}
else {
    console.log('Delete')
}
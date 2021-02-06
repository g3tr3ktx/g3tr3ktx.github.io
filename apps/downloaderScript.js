var imageLink;
var PDFDownloadLink;


// Defining async function 
async function getapi(bookName) {
    downloadLink.style.display = "none";
    // Storing response 
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + bookName);
    const myPDF = await fetch("https://sheltered-lake-50186.herokuapp.com/" + bookName);
    console.log(myPDF);
    var PDFData = await myPDF.json();

    // Storing data in form of JSON 
    var data = await response.json();
    // console.log(data); 
    if (response) {
        imageLink = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
        PDFDownloadLink = PDFData["data"][0];
        var testPdfLinks;
        for (i = 0; i < PDFData["data"].length; i++) {
            testPdfLinks += "<a>Hey</a>";

        }
        testDownloadLinks.innerHTML = testPdfLinks;
        console.log(PDFDownloadLink);
    }
    downloadLink.style.display = "block";
    // show(data); 
}
// Calling that async function 
// getapi(api_url); 


async function printName() {
    console.log(bookNameInput.value);
    await getapi(bookNameInput.value);
    bookCoverImage.src = imageLink;
    downloadLink.href = PDFDownloadLink;
}

var bookNameInput = document.getElementById("bookName");
var bookCoverImage = document.getElementById("bookCover");
var downloadLink = document.getElementById("downloadLink");
var testDownloadLinks = document.getElementById("testDownloadLinks");
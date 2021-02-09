var imageLink;


// Defining async function 
async function getapi(bookName) {
    // Storing response 
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + bookName);
    const myPDF = await fetch("https://sheltered-lake-50186.herokuapp.com/" + bookName);
    console.log(myPDF);
    var PDFData = await myPDF.json();
    // Storing data in form of JSON 
    var data = await response.json();
    console.log(data);
    if (response) {
        imageLink = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
        var testPdfLinks = "";
        for (i = 0; i < PDFData["data"].length; i++) {
            testPdfLinks += "<a href=" + PDFData["data"][i] + ">Server " + i + "</a>";

        }
        testDownloadLinks.innerHTML = testPdfLinks;
    }
}


async function printName() {
    await getapi(bookNameInput.value);
    bookCoverImage.src = imageLink;
}

var bookNameInput = document.getElementById("bookName");
var bookCoverImage = document.getElementById("bookCover");
var testDownloadLinks = document.getElementById("testDownloadLinks");
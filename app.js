// const http = require('http');
//
// const server = http.createServer((request,response) => {
//     response.write("Hello world");
//     response.end();
// })
//
// server.listen(3000, '127.0.0.1', () => {
//     console.log("server running on localhost:3000");
// })


function Count(text) {

    var wordText = text.match(/(\w+)/g); // \w find characters and + continue until find non-alphanumeric character
    var wordCount = wordText.length;
    var words = wordText.values();


    console.log(wordCount)

    for (let elements of words) {
        console.log(elements);
    }


}
Count("Hello Maria fvbxc fbc f%gfd gh ")

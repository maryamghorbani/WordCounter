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

        var wordCount = text.match(/(\w+)/g).length;
        // \w find characters and + continue until find non-alphanumeric character

        console.log(wordCount)

}
Count("Hev % 1 3 cb&cv llo Maria dslkfm sdfjl lsfj m ")

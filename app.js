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


const CountUniqueWords = txt => new Set(txt.toLowerCase().match(/\w+/g)).size;
//A Set is a collection of unique values. Each value may occur only once in a Set.
// \w find characters and + continue until find non-alphanumeric character

const text = "sa ma sa  MA sa sa Sa";

console.log(CountUniqueWords(text))


var words = new Set(text.toLowerCase().match(/\w+/g).values())
for (let elements of words) {
    console.log(elements);
}
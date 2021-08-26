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


const text = "salam man maryam hastam. salam. khjoobin? maryam salam";
const CountUniqueWords = txt => new Set(txt.toLowerCase().match(/\w+/g)).size;
//A Set is a collection of unique values. Each value may occur only once in a Set.
// \w find characters and + continue until find non-alphanumeric character

console.log(CountUniqueWords(text))


var words = text.toLowerCase().match(/\w+/g).values();
var items = {};
//define a dictionary
for (let item of words) {
    if(isNaN(items[item])){
        items[item] = 0;
    }
    items[item] += 1;
}
// count unique words

items = Object.keys(items).sort().reduce((r, k) => (r[k] = items[k], r), {});
// sort words

for (const [key, value] of Object.entries(items)) {
    console.log(key, value);
}

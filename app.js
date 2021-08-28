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



var fs = require('fs');
//allows to work with the file system on your computer.


try {
    var data = fs.readFileSync('file.txt', 'utf8')

} catch (err) {
    console.error(err)
}

var text = data;
function CountUniqueWords(txt) {
    const Count = new Set(txt.toLowerCase().match(/\w+/g)).size;
    return Count;
}


console.log(CountUniqueWords(text))
//A Set is a collection of unique values. Each value may occur only once in a Set.
// \w find characters and + continue until find non-alphanumeric character


function CountWord(text) {
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

    function SortWords() {
        items = Object.keys(items).sort().reduce((r, k) => (r[k] = items[k], r), {});
        // sort words
    }

    for (const [key, value] of Object.entries(items)) {

        console.log(key,value);
    }
    return items

}

CountWord(text);


module.exports = { CountUniqueWords , CountWord};

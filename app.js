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





function readFile(filePath) {
    //allows to work with the file system on your computer.
    try {
        const fs = require('fs');
        return fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        console.error(err);
        return '';
    }
}

function splitWords(content) {
    return content.toLowerCase().match(/\w+/g).values();
}

//A Set is a collection of unique values. Each value may occur only once in a Set.
// \w find characters and + continue until find non-alphanumeric character

function countUniqueWord(listOfWord) {
    //define a dictionary
    const items = {};
    for (let item of listOfWord) {
        if (isNaN(items[item])) {
            items[item] = 0;
        }
        items[item] += 1;
    }
    return items;
}

function sortAlphabeticCountWord(collectionOfWord) {
    return Object.keys(collectionOfWord).sort().reduce((r, k) => (r[k] = collectionOfWord[k], r), {});
}

function printWords(collectionOfWord) {
    // sort words
    console.log('total items: ' + Object.keys(collectionOfWord).length);
    for (const [key, value] of Object.entries(collectionOfWord)) {

        console.log(key, value);
    }
}


const content = readFile('file.txt');
const words = splitWords(content);
let wordsCount = countUniqueWord(words);
wordsCount = sortAlphabeticCountWord(wordsCount);
printWords(wordsCount);


module.exports = { splitWords , countUniqueWord , sortAlphabeticCountWord };

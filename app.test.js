const { splitWords , countUniqueWord , sortAlphabeticCountWord }  = require('./app');

const content = "Hello world, heLlo, aha";
const wordlist = Array("hello", "world", "hello", "aha");
const wordcollection = { hello: 2, world: 1, aha: 1 };



describe("Test word counting", () => {
    test("Split words", () => {
        expect(Array.from(splitWords(content))).toMatchObject(Array("hello", "world", "hello", "aha"));
    });
    test("Countong Unique words", () => {
        expect(countUniqueWord(wordlist)).toEqual({ hello: 2, world: 1, aha: 1 })
    });
    test("Sort words", () => {
        expect(sortAlphabeticCountWord(wordcollection)).toEqual({ aha: 1, hello: 2, world: 1 })
    });
});
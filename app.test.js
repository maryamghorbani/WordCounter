const { splitWords , countUniqueWord , sortAlphabeticCountWord }  = require('./app');

const content = "Hello world, heLlo, aha";
const wordlist = {};
const wordcollection = { hello: 3, maryam: 1, aha: 1 };



describe("Test word counting", () => {
    test("Split words", () => {
        expect(splitWords(content)).toMatchObject({});
    });
    test("Countong Unique words", () => {
        expect(countUniqueWord(wordlist)).toEqual({ hello: 3, maryam: 1, aha: 1 })
    });
    test("Sort words", () => {
        expect(sortAlphabeticCountWord(wordcollection)).toEqual({ aha: 1, hello: 3, maryam: 1 })
    });
});
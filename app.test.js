const { CountUniqueWords , CountWord}  = require('./app');

var input = "Hello world, heLlo"

describe("Test word counting", () => {
    test('return 2 when input is hello world', () => {
        expect(CountUniqueWords("hello world")).toBe(2);
    });
    test('return {"hello": 2, "world": 1}, helLo when input is Hello world, heLlo', () => {
        expect(CountWord(input)).toStrictEqual({"hello": 2, "world": 1});
    });
});
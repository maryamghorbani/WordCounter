const { CountWord }  = require('./app');

var input = "Hello world, heLlo, aha"

describe("Test word counting", () => {
    test('return {"hello": 2, "world": 1}, helLo when input is Hello world, heLlo', () => {
        expect(CountWord(input)).toStrictEqual({"hello": 2, "world": 1, "aha":1});
    });
});
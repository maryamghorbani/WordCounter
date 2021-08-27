const { CountUniqueWords , CountWord}  = require('./app');

describe("Test word counting", () => {
    test('return 2 when input is hello world', () => {
        expect(CountUniqueWords("hello world")).toBe(2);
    });
    test('return hello world, helLo when input is hello:2 world:1', () => {
        expect(CountWord("hello world, helLo")).toBe("hello 2\n" + "world 1\n");
    });
});
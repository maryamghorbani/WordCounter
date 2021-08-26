const CountUniqueWords  = require('../app');

test('return hello:1 world:1 when input is hello world', () => {
    expect(CountUniqueWords("hello world")).toBe("hello:1 world:1");
});
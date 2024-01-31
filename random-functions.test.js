const functionModule = require('./random-functions');

test("Check that the first letter is capitalized", () => {
    expect(functionModule.capitalize("hello world")).toBe("Hello world");
})

test("Check that the string is correctly reversed", () => {
    expect(
        functionModule.reverseString("I love JavaScript")
        ).toBe("tpircSavaJ evol I");
})

test("Check that 2 plus 3 equals 5", () => {
    expect(functionModule.calculator.add(2, 3)).toBe(5);
})

test("Check that 7 minus 10 equals -3", () => {
    expect(functionModule.calculator.subtract(7, 10)).toBe(-3);
})

test("Check that 20 times 50 equals 1000", () => {
    expect(functionModule.calculator.multiply(20, 50)).toBe(1000);
})

test("Check that 200 divided by 25 equals 8", () => {
    expect(functionModule.calculator.divide(200, 25)).toBe(8);
})

test("Check that the cipher works on a simple case", () => {
    expect(functionModule.caeserCipher("hello")).toBe("mjqqt");
})

test("Check that letter cases are maintained", () => {
    expect(
        functionModule.caeserCipher("THIS should WORK too")
        ).toBe("YMNX xmtzqi BTWP ytt");
})

test("Check that punctuation is unchanged", () => {
    expect(
        functionModule.caeserCipher("Don't change this - not at all!")
        ).toBe("Its'y hmfslj ymnx - sty fy fqq!");
})

test("Check that the parameters of the returned object are correct", () => {
    expect(functionModule.analyzeArray([32, 9, -11, 76, 129]).average).toBe(47);
    expect(functionModule.analyzeArray([32, 9, -11, 76, 129]).min).toBe(-11);
    expect(functionModule.analyzeArray([32, 9, -11, 76, 129]).max).toBe(129);
    expect(functionModule.analyzeArray([32, 9, -11, 76, 129]).length).toBe(5);
})
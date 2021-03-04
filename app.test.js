const { DollarToYen } = require("./app.js");
const { EuroToDollar } = require("./app.js");
const { YenToPound } = require("./app.js");

test("1 Dollar should be 107.82Yens", () => {
    const convert = DollarToYen(1, 107.82);
    const expected = 1 * 107.82;
    expect(expected).toBe(convert)
});
test("1 Euro should be 1.2Dollars", () => {
    const convert = EuroToDollar(1, 1.2);
    const expected = 1 * 1.2;
    expect(expected).toBe(convert)
});
test("1 Yen should be 0.0006Pounds", () => {
    const convert = YenToPound(1, 0.0006);
    const expected = 1 * 0.0006;
    expect(expected).toBe(convert)
});
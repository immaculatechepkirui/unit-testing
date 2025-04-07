const {add, subtract, divide, multiply} = require('./math');

test("adds 2+ 3 to equal 5", () => {
    expect(add(2, 3)).toBe(5);
});
test("subtract 6-3 to equal 3", () => {
    expect(subtract(6, 3)).toBe(3);
});

test("adds 21/3 to equal 7", () => {
    expect(divide(21,3)).toBe(7);
});


test("multipys 4 *5 to equal 20", () => {
    expect(multiply(4, 5)).toBe(20);
});




const fizzBuzz = require(('./fizzbuzz'));

test('returns FizzBuzz for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });
  test('returns Fizz for multiples of 2', () => {
    expect(fizzBuzz(32)).toBe('Fizz');
    expect(fizzBuzz(4)).toBe('Fizz');
  });

  test('returns Fizz for multiples of 3', () => {
    expect(fizzBuzz(9)).toBe('Buzz');
    expect(fizzBuzz(27)).toBe('Buzz');
  })
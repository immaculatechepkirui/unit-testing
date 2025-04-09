

const reverseString = require('./string');


test('reverses a string', () => {
    expect(reverseString('morning')).toBe('gninrom');
    expect(reverseString('draw')).toBe('ward');
    expect(reverseString('')).toBe('');
    expect(reverseString('b')).toBe('b');
  });
  
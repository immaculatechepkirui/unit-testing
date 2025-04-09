


const isValidEmail = require ('./validemail');


test('validates email format', () => {
    expect(isValidEmail('temporary@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('current.test@domain.co')).toBe(true);
    expect(isValidEmail('wrong@domain')).toBe(false);
  });
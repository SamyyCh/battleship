const isSunk = require('./ship.js');

test('hits sunk ship', () => {
    expect(isSunk(4, 5)).toBe('ship has sunk')
});
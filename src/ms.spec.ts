import ms from './ms';

describe('teste', () => {
    test('testing', () => {
        const sut = ms(3, 1.5, 18);
        expect(sut).toBe(60.75);
    });
});

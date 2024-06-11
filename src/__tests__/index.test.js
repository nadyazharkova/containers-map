
import ErrorRepository from '..';

test('testError', () => {
    const error = new ErrorRepository();
    const result = error.translate(400);
    expect(result).toBe('bad request');
});
test('testError2', () => {
    const error = new ErrorRepository();
    const result = error.translate(450);
    expect(result).toBe('Unknow error');
});

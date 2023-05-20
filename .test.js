import {capitalize} from './functions/capitalize';
import {reverseString} from './functions/reverseString';
import { calculator } from './functions/calculator';
import {caesarCipher} from './functions/caesarCipher';
import {analyzeArray} from './functions/analyzeArray';

test('capitalizes first character', () => {
    expect(capitalize('man')).toBe('Man')
});

test('reverse a string', () => {
    expect(reverseString('man')).toBe('nam');
});

test('calculates numbers', () => {
    expect(calculator.add(2, 2)).toBe(4)
    expect(calculator.subtract(4, 2)).toBe(2)
    expect(calculator.divide(6, 2)).toBe(3)
    expect(calculator.multiply(10, 10)).toBe(100)
})

test('encrypt caesar cipher', () => {
    expect(caesarCipher('abcd', 1)).toBe('bcde');
    expect(caesarCipher('abcd', 3)).toBe('defg');
    expect(caesarCipher('wxyz', 1)).toBe('xyza');
    expect(caesarCipher('EFG', 1)).toBe('FGH'); // test for capital letters
    expect(caesarCipher('wxYZ', 1)).toBe('xyZA');
    expect(caesarCipher('z', 5)).toBe('e'); // test for huge shift number
    expect(caesarCipher('my man bro', 2)).toBe('oa ocp dtq'); // test for white space
})

test('return array info in object', () => {
    expect(analyzeArray([2, 4, 6])).toBe({ average: 4, min: 2, max: 6,length: 3 })
})
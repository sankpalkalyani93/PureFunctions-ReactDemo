// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { addition } from "./utils";

test('2 + 4 to be equal to 6 : ', () => {
    expect(addition(2,4)).toBe(6);
});
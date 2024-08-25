import { it, expect } from "vitest";
import { AcceptableAge, transfromNum } from "../transfrom";

it('check the value it is a number or NaN', () => {
    let value = 22

    let result = transfromNum(value)

    expect(result).toBeTypeOf('number')
})


it('check the thit is Nan', () => {
    //    Arrange
    let value = 'amirabas';
    // Act
    let result = transfromNum(value);
    // Assert
    expect(result).toBeNaN()

    // checkAcceptabel Age
    let ageMan = 44;

    let resultAge = AcceptableAge(22)

    expect(resultAge).toBeTypeOf('boolean')
})
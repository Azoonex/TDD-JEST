import { it, expect } from "vitest";
import { transfromNum } from "../transfrom";

it('check the value it is a number or NaN', () => {
    let value = 22
    
    let result = transfromNum(value)
    
    expect(result).toBeTypeOf('number')
})


it('check the thit is Nan',()=>{
    let value = 'amirabas';

    let result = transfromNum(value);

    expect(result).toBeNaN()
})
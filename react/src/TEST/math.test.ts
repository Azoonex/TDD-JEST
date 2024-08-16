import {expect, it} from 'vitest'
import { add } from './math'

it('math Test',()=>{
    // Arange
    let num = 1
    

    // Act
    let reuslt =  add(num);


    // Assert
    expect(reuslt).toBe(2)
})


// rules test AAA Acrenge / act / assert

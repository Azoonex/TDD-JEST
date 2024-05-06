import {toUpserCase} from "../app/Utils";



describe('Utils test String', ()=>{
  test('Shoulde Test UperCaseITems',()=>{
      const result = toUpserCase("abc");
      expect(result).toBe("ABC");
  })
})
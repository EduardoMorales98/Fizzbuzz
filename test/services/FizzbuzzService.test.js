const FizzbuzzService=require("./../../lib/services/FizzbuzzService.js")

describe("Test para FizzbuzzService",()=>{
    test("Validación FizzBuzz para score no divisible ni entre 3 ni entre 5",()=>{
        const explorer1 = {name: "Explorer1", score: 1}
        const validation=FizzbuzzService.applyValidationInExplorer(explorer1)
        console.log(validation)
        expect(validation.trick).toBe(1)
    })

})
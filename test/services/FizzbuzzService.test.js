const FizzbuzzService=require("./../../lib/services/FizzbuzzService.js")

describe("Test para FizzbuzzService",()=>{
    test("Validación FizzBuzz para score no divisible ni entre 3 ni entre 5",()=>{
        const explorer1 = {name: "Explorer1", score: 1}
        const validation=FizzbuzzService.applyValidationInExplorer(explorer1)
        //console.log(validation)
        expect(validation.trick).toBe(1)
    })

    test("Validación FizzBuzz para score divisible entre 3",()=>{
        const explorer3 = {name: "Explorer3", score: 9}
        const validation=FizzbuzzService.applyValidationInExplorer(explorer3)
        //console.log(validation)
        expect(validation.trick).toBe("FIZZ")
    })

    test("Validación FizzBuzz para score divisible entre 5",()=>{
        const explorer5 = {name: "Explorer5", score: 20}
        const validation=FizzbuzzService.applyValidationInExplorer(explorer5)
        //console.log(validation)
        expect(validation.trick).toBe("BUZZ")
    })

})
const ExplorerService=require("./../../lib/services/ExplorerService.js")

describe("Test para ExplorerService",()=>{
    test("Requerimiento 1: Obtener lista de los explorers en determinada misión",()=>{
        const explorers=[{mission:"node"},{mission:"node"},{mission:"java"}]
        const explorersInNode=ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(2)
    })

    test("Requerimiento 2: Calcular el número de explorers en determinada misión",()=>{
        const explorers=[{mission:"node"},{mission:"node"},{mission:"java"}]
        const numberExplorersInNode=ExplorerService.getAmountOfExplorersByMission(explorers, "node")
        expect(numberExplorersInNode).toBe(2)
    })
})
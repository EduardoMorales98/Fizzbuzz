const ExplorerService=require("./../../lib/services/ExplorerService.js")

describe("Test para ExplorerService",()=>{
    test("Requerimiento 1: Calcular todos los explorers",()=>{
        const explorers=[{mission:"node"},{mission:"node"},{mission:"node"}]
        const explorersInNode=ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(3)
    })
})
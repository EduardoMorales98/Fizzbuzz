const ExplorerService=require("./../../lib/services/ExplorerService.js")

describe("Test para ExplorerService",()=>{
    test("Requerimiento 1: Obtener lista de los explorers en determinada misión",()=>{
        const explorers=[{mission:"node"},{mission:"node"},{mission:"java"}]
        const explorersInNode=ExplorerService.filterByMission(explorers, "node")
        console.log(explorersInNode)
        expect(explorersInNode.length).toBe(2)
    })

    test("Requerimiento 2: Calcular el número de explorers en determinada misión",()=>{
        const explorers=[{mission:"node"},{mission:"node"},{mission:"java"}]
        const numberExplorersInNode=ExplorerService.getAmountOfExplorersByMission(explorers, "node")
        expect(numberExplorersInNode).toBe(2)
    })

    test("Requerimiento 3: Obtener la lista de usuarios de github de los explorers que están en node",()=>{
        const explorers=[{githubUsername: "ajolonauta1",mission:"node"},{githubUsername: "ajolonauta2",mission:"node"},{githubUsername: "ajolonauta3",mission:"java"}]
        const UsersExplorersInNode=ExplorerService.getExplorersUsernamesByMission(explorers, "node")
        console.log(UsersExplorersInNode)
        expect(UsersExplorersInNode.length).toBe(2)
    })
})
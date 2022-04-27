const ExplorerController=require("./../../lib/controllers/ExplorerController.js");
describe("Test para ExplorerController",()=>{
    test("1. Obtener lista de los explorers que están en node",()=>{
        const explorers=[{mission:"node"},{mission:"node"},{mission:"java"}];
        const explorersInNode=ExplorerController.getExplorersByMission("node");
        //console.log(explorersInNode)
        expect(explorersInNode.length).toBe(10);
    });

    test("2. Obtener la lista de usuarios de github de los explorers que están en node",()=>{
        const explorers=[{mission:"node"},{mission:"node"},{mission:"java"}];
        const UsersExplorersInNode=ExplorerController.getExplorersUsernamesByMission("node");
        //console.log(UsersExplorersInNode)
        expect(UsersExplorersInNode.length).toBe(10);
    });
});
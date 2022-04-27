const ExplorerController=require("./../../lib/controllers/ExplorerController.js");
describe("Test para ExplorerController",()=>{
    test("Obtener lista de los explorers que están en node",()=>{
        const explorers=[{mission:"node"},{mission:"node"},{mission:"java"}];
        const explorersInNode=ExplorerController.getExplorersByMission("node");
        //console.log(explorersInNode)
        expect(explorersInNode.length).toBe(10);
    });

});
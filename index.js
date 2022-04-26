const Reader=require("./lib/utils/Reader.js")
const ExplorerService=require("./lib/services/ExplorerService.js")

const explorers=Reader.readJsonFile("explorers.json")// esto regresa la lista de explorers del archivo
//console.log(explorers)

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node")
ExplorerService.getAmountOfExplorersByMission(explorers, "node")
//console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))
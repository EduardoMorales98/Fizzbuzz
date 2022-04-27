const Reader=require("./lib/utils/Reader.js")
const ExplorerService=require("./lib/services/ExplorerService.js")
const FizzbuzzService=require("./lib/services/FizzbuzzService.js")

const explorers=Reader.readJsonFile("explorers.json")// esto regresa la lista de explorers del archivo
//console.log(explorers)

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node")
//console.log(ExplorerService.filterByMission(explorers, "node"))
ExplorerService.getAmountOfExplorersByMission(explorers, "node")
//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
ExplorerService.getExplorersUsernamesByMission(explorers, "node")
//console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))

const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorer1)
//console.log(FizzbuzzService.applyValidationInExplorer(explorer1))// {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer3))

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer5))

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer15))
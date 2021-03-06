const Reader=require("./../utils/Reader.js");
const FizzbuzzService=require("./../services/FizzbuzzService.js");
const ExplorerService=require("./../services/ExplorerService.js");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers=Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers,mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers=Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers=Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static applyValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);   
    }
}

module.exports=ExplorerController;

const { CityRepository } = require('../repository/index.js');

class CityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.CityRepository.createCity(data);
            return city; 
        }catch(error){
            console.log("Something went wrong at Service Layer.");
            throw {error};
        }
    }

    async deleteCity(cityID){
        try{
            const response=this.CityRepository.deleteCity(cityID);
            return response;
        }catch(error){
            console.log("Something went wrong at Service Layer.");
            throw {error};
        }
    }
    async updateCity(cityId, data){
        try{
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
        }catch(error){
            console.log("Something went wrong at Service Layer.");
            throw {error};
        }
    }
    async getCity(cityId){
        try{
            const city = await this.CityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong at Service Layer.");
            throw {error};
        }
    }
    async getAllCities(filter){
        try{
            const cities= await this.CityRepository.getAllCities({name : filter.name});
            return cities;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw{error};
        }
    }
}
module.exports = CityService;
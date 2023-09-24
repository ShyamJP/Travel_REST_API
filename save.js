const DBconnect = require('./db/connection')
const DBmodel = require('./model/model')
const traveldata = require('./traveldata.json')

const start = async() =>{
    try{
        await DBconnect();
        await DBmodel.deleteMany();
        await DBmodel.create(traveldata)
        console.log("data Saved in DB");
    }
    catch(err){
        console.log(err);
    }
} 
start();

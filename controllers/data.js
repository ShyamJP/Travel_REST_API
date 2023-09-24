const DBmodel = require('../model/model')


const getAllData = async(req,res) =>{
    // for filter city
    const { name , city , state} = req.query;
    const queryObj = {}

    if(state){
        queryObj.state = { $regex: state , $options : "i" };
    }

    if(name){
        queryObj.name = { $regex: name , $options : "i" };
    }

    if(city){
        queryObj.city = { $regex: city , $options : "i" };
    }

    const filterData = await DBmodel.find(queryObj)
    const mydata = await filterData;
    // const myData = await DBmodel.find(req.query)
    res.status(200).json({mydata});
}

module.exports = {getAllData};

/*
get all data
const getAllData = async(req,res) =>{
    const myData = await DBmodel.find(req.query)
    res.status(200).json({myData});
}
*/
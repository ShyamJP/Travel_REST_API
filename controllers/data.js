const dbSchema = require('../model/model');
const DBmodel = require('../model/model')

const getAllData = async(req,res) =>{
    // for filter
    const { name , city , state , sort , select} = req.query;
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
    
    let filterData = DBmodel.find(queryObj);
    
    if(select){
        let selectTupple = select.split(",").join(" ");
        filterData = filterData.select(selectTupple);
    }
        
    if(sort){
        let sortedData = sort.split(",").join(" ");
        filterData = filterData.sort(sortedData);
    }
            
    console.log(queryObj);
    const mydata = await filterData;
    // const myData = await DBmodel.find(req.query)
    res.status(200).json({mydata});
}

module.exports = {getAllData};


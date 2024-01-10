const db = require('../model/model');


const create = async (req,res) =>{
    const {state,name,city,url,location} = req.body;
    
    const data = new db({
        state : state,
        name : name,
        city : city,
        url : url,
        location : location,
    })
    data.save()
    .then((result)=>res.json({data: result ,message: "Data Added in API"}))
    .catch(err=>{message : "Error"})
}

const update = async (req,res) =>{
    const id = req.params.id;
    const {state,name,city,url,location} = req.body;

    const user = await db.findById({_id:id});
    if(user){
        await db.findByIdAndUpdate({_id:id},{
        state : state,
        name : name,
        city : city,
        url : url,
        location : location
        })
        .then(result => res.json({message : "Data Updated successfully !" , data : result}))
        .catch(err =>res.json(err))
    }
    else{
        res.json({message:"User not Exist try again!"});
    }
}

const del = async (req,res) =>{
    const id = req.params.id;

    const d = await db.findByIdAndDelete({_id:id})
    .then(result => {res.json("Data is deleted")})
    .catch(err => {res.json(err)});
};

module.exports = {create , update , del}
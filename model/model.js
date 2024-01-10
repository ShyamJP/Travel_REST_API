const mongoose = require('mongoose')

const DBSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    state: {
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required : true
    }
})

const dbSchema = mongoose.model('traveldata',DBSchema);
module.exports = dbSchema;
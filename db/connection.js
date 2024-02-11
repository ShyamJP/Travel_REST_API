const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
require('dotenv').config()
const url = process.env.DB_URL

const DBconnect = () =>{
    return mongoose.connect(url , 
       { useNewUrlParser: true,
        useUnifiedTopology: true}
    )
    .then(()=> console.log('DB Connected..'))
    .catch((err) => console.log(err))
} 

module.exports = DBconnect;
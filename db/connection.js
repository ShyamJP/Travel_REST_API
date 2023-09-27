const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
require('dotenv').config()
const url = process.env.DB_URL
console.log(url)
// const url = "mongodb+srv://shyamjpankhaniya05:XWXhgsHXbxUYXkXG@data.hs6xlve.mongodb.net/?retryWrites=true&w=majority";

const DBconnect = () =>{
    return mongoose.connect(url , 
       { useNewUrlParser: true,
        useUnifiedTopology: true}
    )
    .then(()=> console.log('DB Connected..'))
    .catch((err) => console.log(err))
} 

module.exports = DBconnect;
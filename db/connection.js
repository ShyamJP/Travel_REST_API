const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const url = "mongodb+srv://shyamjpankhaniya05:XWXhgsHXbxUYXkXG@data.hs6xlve.mongodb.net/?retryWrites=true&w=majority";

const DBconnect = () =>{
    return mongoose.connect(url , 
       { useNewUrlParser: true,
        useUnifiedTopology: true}
    )
    .then(()=> console.log('DB Connected..'))
    .catch((err) => console.log(err))
} 

module.exports = DBconnect;
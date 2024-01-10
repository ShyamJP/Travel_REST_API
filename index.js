const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const DBconnect = require('./db/connection');

// it is used when we send data when we need to send data in db in json format
// it must be defined when we send data in db
app.use(express.json())


// Router
const dataRouter = require('./routes/route');

// some error in console

app.get('/',(req,res)=>{
    res.send('Welcome to API Hub');
})

app.use('/data',dataRouter);

const start = async () =>{
    try{
        await DBconnect();
        app.listen(port, ()=>{
            console.log(`App is running on port ${port} goto http://localhost:5000 `)
        })
    }
    catch(err){
        console.log(err);
    }
}
start();


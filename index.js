const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const DBconnect = require('./db/connection');

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


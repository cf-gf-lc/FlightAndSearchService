const express = require("express");
const bodyParser = require ("body-parser");
const { PORT } = require('./config/serverconfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');

const setupStartServer = async() =>{

    const app=express();
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,async ()=> {
        console.log(`Server started at ${PORT}`);

         if(process.env.SYNC_DB){
            db.sequelize.sync({
                alter:true
            });
        }
    });
}
setupStartServer();


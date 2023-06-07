require('dotenv').config();

const mongoose=require('mongoose');

const connectionStr=`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.l27jlvp.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(connectionStr,{useNewUrlParser:true}).then(()=>console.log('connected to mongo db')).catch(err=>console.log(err))

mongoose.connection.on('error',err=>{
    console.log(err);
})



// Sidk@ndw@l091
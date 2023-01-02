const mongoose = require('mongoose'); //connect to mongoose module
require('dotenv').config()

main().catch(err => console.log(err)); //Error Message if not working the connect

async function main() { //connect Data Base from Mongo Atlas by user & password 
    await mongoose.connect(`mongodb+srv://uri:1234@cluster0.v0gts8j.mongodb.net/`); //(feb22 == name DataBase)
    console.log(`Mongo Atlas connect...`) //print--> Mongo is Working
}
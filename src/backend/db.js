const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const assert = require('assert');
require('dotenv/config');

let url = "";
let dbName = "";
if (process.env.NODE_ENV) {
    console.log(process.env.NODE_ENV);
    //This is PRODUCTION ENVIROMENT
    url = process.env.DB_URL_PRD;
    console.log(url);
    dbName = "UseJingles"; //capital letter in prod
} else {
    //THIS IS DEV ENVIROMENT
    console.log('we are in dev local');
    url = "mongodb://localhost:27017";
    dbName = "useJingles"; //lower case in development
}

//const url = process.env.NODE_ENV === 'production' ?
  //  process.env.DB_URL_PRD :
    //process.env.DB_URL_DEV;


function connect() {
    const client = new MongoClient(url, {useNewUrlParser: true});
    return new Promise(resolve => {
        client.connect(function(err) {
            assert.equal(null, err);
            const db = client.db(dbName);
            console.log('Connected successfully to server');
            const dbo = client.db(dbName);
            resolve(db);
        });
    });
}
module.exports = { connect };
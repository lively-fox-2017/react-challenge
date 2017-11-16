var express    = require('express')
var bodyParser = require('body-parser')
var app        = express()
var Pokedex    = require('pokedex-promise-v2')
var P          = new Pokedex();

app.listen(3111,()=>{
    console.log('====================================');
    console.log(`PORT 3111, OK !!!`);
    console.log('====================================');
})




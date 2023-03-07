const express = require('express');

const productsrouter= require('./productsRouter');
const usersrouter = require('./usersRouter');
const categorierouter= require('./catergorieRouter');




function routerApi(app) {
 const router = express.Router() ;
 app.use('/api/v1' , router);
 router.use('/products', productsrouter);
 router.use('/users',usersrouter);
 router.use('/categories', categorierouter);




}

 module.exports = routerApi;



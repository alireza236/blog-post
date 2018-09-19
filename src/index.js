/* eslint-disable no-console */
 import express from 'express';
 import HTTPStatus from 'http-status';
 import constants from './config/constants';
 import './config/database';
 import middlewaresConfig from './config/middleware';
 import apiRoutes from './modules';
 import { authJwt } from './services/auth.services';
 
 const app = express();
 
 middlewaresConfig(app);
 
 app.get('/testing',authJwt, (req, res) => {
	 res.send({message:'This is a private route !!'});
 });


 /* GET home page. */
app.get('/', function(req, res, next) {
  res.status(HTTPStatus.OK).send({
  	status:"Success", message:"API Blog Post", data:{version_number:"v1.0.0",Author:"Ali Reza M" }
  })
});

 apiRoutes(app);

 app.listen(constants.PORT, err => {
     if (err) {
         throw err;
     } else {
         console.log(` Server running on port: ${constants.PORT} --- Running on ${process.env.NODE_ENV} --- Make something great `);
     }
 });

 
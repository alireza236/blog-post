 
 import { Router } from 'express';
 import validate from 'express-validation';
 import * as postController from './post.controller';
 import { authJwt } from '../../services/auth.services';
 import postValidation from './post.validation';

 const routes = new Router();
 
 routes.post('/',
 	 validate(postValidation.createPost),
 	 authJwt,
 	 postController.createPost
 );

 routes.get('/',
 	authJwt,
 	postController.getPostsList
 );
 
 routes.get('/:id',
 	authJwt,
 	postController.getPostById
 );

 routes.patch('/:id',
	   authJwt,
	   validate(postValidation.updatePost),
	   postController.updatePost,
 );

 routes.post('/:id/favorite',
 	authJwt,
 	postController.favoritePost
 );

 routes.delete('/:id',
 	authJwt,
 	postController.deletePost
 );
 
 export default routes;
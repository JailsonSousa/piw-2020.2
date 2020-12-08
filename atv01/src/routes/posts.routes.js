import Router from 'express';

import PostController from '../app/controllers/PostController.js';

const postController = new PostController();
const postsRouter = new Router();

postsRouter.get('/:id', postController.getById);
postsRouter.get('/', postController.getAll);
postsRouter.get('/user/:id', postController.getAllByUser);
postsRouter.post('/', postController.create);
postsRouter.put('/like/increment/:id', postController.incrementLike);
postsRouter.put('/like/decrement/:id', postController.decrementLike);
postsRouter.put('/:id', postController.update);
postsRouter.delete('/:id', postController.delete);

export default postsRouter;

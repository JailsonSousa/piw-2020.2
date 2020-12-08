import Router from 'express';

import UserController from '../app/controllers/UserController.js';

const userController = new UserController();
const usersRouter = new Router();

usersRouter.get('/:id', userController.getById);
usersRouter.get('/', userController.getAll);
usersRouter.post('/', userController.create);
usersRouter.put('/:id', userController.update);
usersRouter.delete('/:id', userController.delete);

export default usersRouter;

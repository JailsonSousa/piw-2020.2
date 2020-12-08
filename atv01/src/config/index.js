import express from 'express';
import UsersRouter from '../routes/users.routes.js';
import PostsRouter from '../routes/posts.routes.js';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api/users', UsersRouter);
    this.server.use('/api/posts', PostsRouter);
  }
}

export default new App().server;

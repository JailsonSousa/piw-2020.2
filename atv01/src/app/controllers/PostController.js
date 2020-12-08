/* eslint-disable class-methods-use-this */
import { v4 as uuid } from 'uuid';

const posts = [];

export default class UsersController {
  getById(request, response) {
    try {
      const { id } = request.params;

      const postIndex = posts.findIndex(user => user.id === id);

      if (postIndex < 0)
        return response.status(400).json({ error: 'post not found' });

      const post = posts[postIndex];

      return response.json(post);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  getAll(request, response) {
    try {
      return response.json(posts);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  getAllByUser(request, response) {
    try {
      const { id } = request.params;

      const userPosts = posts.filter(post => post.userId === id);

      return response.json(userPosts);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  create(request, response) {
    try {
      const { msg, userId } = request.body;

      const post = {
        id: uuid(),
        userId,
        msg,
        likes: 0,
      };

      posts.push(post);

      return response.json(post);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  update(request, response) {
    try {
      const { id } = request.params;

      const { msg } = request.body;

      const postIndex = posts.findIndex(post => post.id === id);

      if (postIndex < 0)
        return response.status(400).json({ error: 'post not found' });

      const post = {
        id,
        msg,
        likes: posts[postIndex].likes,
      };

      posts[postIndex] = post;

      return response.json(post);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  incrementLike(request, response) {
    try {
      const { id } = request.params;

      const postIndex = posts.findIndex(post => post.id === id);

      if (postIndex < 0)
        return response.status(400).json({ error: 'post not found' });

      const post = {
        id,
        userId: posts[postIndex].userId,
        msg: posts[postIndex].msg,
        likes: posts[postIndex].likes + 1,
      };

      posts[postIndex] = post;

      return response.json(post);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  decrementLike(request, response) {
    try {
      const { id } = request.params;

      const postIndex = posts.findIndex(post => post.id === id);

      if (postIndex < 0)
        return response.status(400).json({ error: 'post not found' });

      const post = {
        id,
        userId: posts[postIndex].userId,
        msg: posts[postIndex].msg,
        likes: posts[postIndex].likes - 1,
      };

      posts[postIndex] = post;

      return response.json(post);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  delete(request, response) {
    try {
      const { id } = request.params;

      const postIndex = posts.findIndex(post => post.id === id);

      if (postIndex === -1)
        return response.status(400).json({ error: 'post does not exists.' });

      posts.splice(postIndex, 1);

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

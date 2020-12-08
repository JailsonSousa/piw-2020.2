/* eslint-disable class-methods-use-this */
import { v4 as uuid } from 'uuid';
import { hash } from 'bcryptjs';

const users = [];

export default class UsersController {
  getById(request, response) {
    try {
      const { id } = request.params;

      const userIndex = users.findIndex(user => user.id === id);

      if (userIndex < 0)
        return response.status(400).json({ error: 'user not found' });

      const user = users[userIndex];

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  getAll(request, response) {
    try {
      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async create(request, response) {
    try {
      const { name, email, password } = request.body;

      const hashedPassword = await hash(password, 8);

      const user = {
        id: uuid(),
        name,
        email,
        password: hashedPassword,
      };

      users.push(user);

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  update(request, response) {
    try {
      const { id } = request.params;

      const { name, email } = request.body;

      const userIndex = users.findIndex(user => user.id === id);

      if (userIndex < 0)
        return response.status(400).json({ error: 'user not found' });

      const user = {
        id,
        name,
        email,
        password: users[userIndex].password,
      };

      users[userIndex] = user;

      response.json(user);
      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  delete(request, response) {
    try {
      const { id } = request.params;

      const userIndex = users.findIndex(user => user.id === id);

      if (userIndex === -1)
        return response.status(400).json({ error: 'user does not exists.' });

      users.splice(userIndex, 1);

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

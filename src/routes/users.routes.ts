import { Router } from 'express';
import User from '../models/User';

const usersRouter = Router();

const users: User[] = [];

usersRouter.post('/', (request, response) => {
  const { name, email, maritalStatus, cpf, city, state } = request.body;

  const user = new User(name, email, maritalStatus, cpf, city, state);

  users.push(user);

  return response.json(user);
});

export default usersRouter;

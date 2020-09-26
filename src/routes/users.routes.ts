/* eslint-disable @typescript-eslint/no-var-requires */
import { Router } from 'express';

import User from '../models/User';

const cpfValidator = require('cpf-val');

const usersRouter = Router();

const users: User[] = [];

usersRouter.post('/', (request, response) => {
  const { name, email, maritalStatus, cpf, city, state } = request.body;

  if (!cpfValidator(cpf)) {
    return response.status(400).json({ message: 'Esse cpf é inválido' });
  }

  const user = new User(name, email, maritalStatus, cpf, city, state);

  users.push(user);

  return response.json(user);
});

export default usersRouter;

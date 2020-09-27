/* eslint-disable @typescript-eslint/no-var-requires */
import { request, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);
  const users = await usersRepository.find();

  return response.json(users);
});

usersRouter.get('/:id', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);
  const user = await usersRepository.findOne(request.params.id);

  return response.json(user);
});

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, maritalStatus, cpf, city, state } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      maritalStatus,
      cpf,
      city,
      state,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
// Atualizar
usersRouter.put('/:id', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);
  const user = await usersRepository.findOne(request.params.id);
  if (user) {
    usersRepository.merge(user, request.body);
    const result = await usersRepository.save(user);
    return response.json(result);
  }
  return response.status(404).json({ message: 'User not found' });
});

usersRouter.delete('/:id', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);
  const user = await usersRepository.delete(request.params.id);

  return response.json(user);
});

export default usersRouter;

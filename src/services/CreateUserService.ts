/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { fromString } from 'uuidv4';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  email: string;
  maritalStatus: string;
  cpf: string;
  city: string;
  state: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    maritalStatus,
    cpf,
    city,
    state,
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = usersRepository.create({
      name,
      email,
      maritalStatus,
      cpf,
      city,
      state,
    });

    console.log(user);

    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;

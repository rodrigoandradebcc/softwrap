import { uuid } from 'uuidv4';

class User {
  id: string;

  name: string;

  email: string;

  maritalStatus: string;

  cpf: string;

  city: string;

  state: string;

  constructor(
    name: string,
    email: string,
    maritalStatus: string,
    cpf: string,
    city: string,
    state: string,
  ) {
    this.name = name;
    this.email = email;
    this.maritalStatus = maritalStatus;
    this.cpf = cpf;
    this.city = city;
    this.state = state;
  }
}

export default User;

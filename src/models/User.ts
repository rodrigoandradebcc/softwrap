import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  maritalStatus: string;

  @Column()
  cpf: string;

  @Column()
  city: string;

  @Column()
  state: string;
}

export default User;

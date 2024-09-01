import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // id لزم يكون في
  id: number;

  @Column()
  name: string;
}

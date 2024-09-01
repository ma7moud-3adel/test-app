import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // id لزم يكون في
  @Column({ primary: true, generated: 'uuid' })
  id: number;

  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  mail: string;
}

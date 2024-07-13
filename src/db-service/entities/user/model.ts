import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  name!: string;

  @Column({type: 'int', nullable: false})
  age!: number;
}

export type TUserDTO = Omit<User, 'id'>;

import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Event extends BaseEntity {  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  canceled: boolean

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
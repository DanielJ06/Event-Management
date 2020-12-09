import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Event } from "../event/event.entity";

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(type => Event, event => event.user, { eager: true })
  events: Event[];
}
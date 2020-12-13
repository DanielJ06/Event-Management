import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "../event/event.entity";
import { User } from "../user/user.entity";

@Entity()
export class Subscription extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => User, user => user.subscriptions, { eager: false })
  user: User

  @Column()
  userId: number

  @ManyToOne(type => Event, event => event.subscriptions, { eager: false })
  event: Event

  @Column()
  eventId: number
}
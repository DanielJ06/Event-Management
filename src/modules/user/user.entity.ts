import { BaseEntity, Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Event } from "../event/event.entity";
import { Subscription } from "../subscription/subscription.entity";

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

  @OneToMany(type => Subscription, subs => subs.userId)
  subscriptions: Subscription[];

  @OneToMany(type => Event, event => event.user, { eager: true })
  events: Event[];
}
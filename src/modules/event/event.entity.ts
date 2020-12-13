import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, OneToOne, OneToMany, ManyToMany } from "typeorm";
import { Subscription } from "../subscription/subscription.entity";
import { User } from "../user/user.entity";

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

  @OneToMany(type => Subscription, subs => subs.eventId)
  subscriptions: Subscription[];

  @ManyToOne(type => User, user => user.events, { eager: false })
  user: User;

  @Column()
  userId: number;
}
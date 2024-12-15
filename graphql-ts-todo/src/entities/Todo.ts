import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field(() => String)
  title!: string;

  @Column({ default: false })
  @Field(() => Boolean)
  completed!: boolean;
}

import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Todo } from "../entities/Todo";

@Resolver()
export class TodoResolver {
  @Query(() => [Todo])
  async getTodos() {
    return await Todo.find();
  }

  @Mutation(() => Todo)
  async addTodo(
    @Arg("title") title: string,
    @Arg("completed", { defaultValue: false }) completed: boolean
  ) {
    const todo = Todo.create({ title, completed });
    await todo.save();
    return todo;
  }

 
  // New deleteTodo mutation
  @Mutation(() => Boolean)
  async deleteTodo(
    @Arg("id") id: number
  ) {
    const todo = await Todo.findOne({ where: { id } });
    if (!todo) return false;
    await todo.remove();
    return true;
  }

  // New updateTodo mutation
  @Mutation(() => Todo)
  async updateTodo(
    @Arg("id") id: number,
    @Arg("title", { nullable: true }) title?: string,
    @Arg("completed", { nullable: true }) completed?: boolean
  ) {
    const todo = await Todo.findOne({ where: { id } });
    if (!todo) throw new Error("Todo not found");

    // Update the fields that were passed in
    if (title) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    await todo.save();
    return todo;
  }
}

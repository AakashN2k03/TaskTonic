import path from 'path';
import { DataSource } from 'typeorm';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { TodoResolver } from './resolvers/TodoResolver';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'todo_app',
  entities: [path.join(__dirname, 'entities', 'Todo.ts')],  // Ensure correct entity path
  synchronize: true,  // Keep false in production
  logging: true,
});

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    const schema = await buildSchema({
      resolvers: [TodoResolver],
    });

    app.use(
      '/graphql',
      graphqlHTTP({
        schema: schema,
        graphiql: true,
      })
    );

    app.listen(4000, () => {
      console.log('Server running on http://localhost:4000/graphql');
    });
  })
  .catch((error) => console.log("Error during DataSource initialization:", error));

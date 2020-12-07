import { ApolloServer } from "apollo-server-express";

import { app, port } from "./express/express";
import { schema } from "./api/schema";
import { NODE_ENV } from "./nodeEnv";

//link express server to apollo server. adding in schema and context
export const apollo = new ApolloServer({
  schema,

  debug: process.env.NODE_ENV === NODE_ENV.DEV,
  tracing: process.env.NODE_ENV === NODE_ENV.DEV,

  formatError: (err) => {
    if (err.message.startsWith("Database Error: ")) {
      return new Error("Internal server error");
    }

    return err;
  },
});

apollo.applyMiddleware({ app });

//start server
export const server = app.listen({ port }, () =>
  console.log("Now browse to http://localhost:" + port + apollo.graphqlPath)
);

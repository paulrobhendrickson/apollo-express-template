import { ApolloServer } from "apollo-server-express";

import { schema } from "./schema";
import { NODE_ENV } from "./config/nodeEnv";

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

import { helloArgs } from "../gqlSchema/helloSchema";

export const helloResolve = {
  Query: {
    hello: (_root: any, args: helloArgs) => {
      return `Hello, ${args.name ? args.name : "World"}!`;
    },
    visualizer: () => {
      return "To see visual representation of schema navigate to /public/visualizer.html";
    },
  },
};

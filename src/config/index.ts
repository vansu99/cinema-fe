import { GraphQLClient } from "graphql-request";

const requestHeader = {
  authorization: "Bearer token",
};

const requestClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT as string);

export default requestClient;

import { useQuery } from "react-query";
import { GraphQLClient, Variables } from "graphql-request";

const useGQLQuery = <T>(
  key: string,
  query: string,
  variables?: Variables,
  config = {}
) => {
  const endpoint = "https://cinema-vs.herokuapp.com/";
  const headers = {
    headers: {
      authorization: `Bearer token goise`,
      "Content-Type": "application/json",
    },
  };
  const graphqlClient = new GraphQLClient(endpoint, headers);
  const fetchData = async () => await graphqlClient.request(query, variables);

  const { data, isLoading, error } = useQuery<T, Error>(key, fetchData, config);
  return {
    data,
    error,
    isLoading,
  };
};

export default useGQLQuery;

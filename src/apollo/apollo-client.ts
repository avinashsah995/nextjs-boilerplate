import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { getApiToken } from "@/common/utils/api";

const graphqlUrl = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

const link = new HttpLink({
  uri: graphqlUrl,
});

const client = new ApolloClient({
  link: from([authMiddleware(), link]),
  cache: new InMemoryCache(),
});

function authMiddleware() {
  return new ApolloLink((operation, forward) => {
    const token = getApiToken();

    if (!token) {
      return forward(operation);
    }

    // add the authorization to the headers
    operation.setContext((context: any) => ({
      headers: {
        authorization: token,
        ...context.headers,
      },
    }));

    return forward(operation);
  });
}

export default client;

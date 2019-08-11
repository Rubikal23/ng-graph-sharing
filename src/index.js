import { resolvers, typeDefs } from "./app/resolver";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-angular-link-http";

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }),
  typeDefs,
  resolvers
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    books:[],
  },
})

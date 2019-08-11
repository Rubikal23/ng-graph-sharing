import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    books: [ID!]!
  }
  
  extend type Hoot {
    isWriting: Boolean!
  }
  
  extend type Mutation {
    openOrCloseBook(id : ID!): [Hoot]
  }
`;

export const resolvers = {};

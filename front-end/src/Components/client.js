import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
  uri: 'http://192.168.56.235/graphql/graphiql'
});

export default client;

import ApolloClient from 'apollo-boost';

import Config from '../config';


const client = new ApolloClient({
  uri: Config.graphql_uri
});

export default client;

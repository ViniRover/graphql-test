import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose'; 

import schema from './schema';

const server = new ApolloServer({
  schema,
  playground: true,
});

mongoose.connect('mongodb://localhost:27017/graphql', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export default server;

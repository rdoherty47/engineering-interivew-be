import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs'
import { resolvers } from './resolvers/resolvers.js';


const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
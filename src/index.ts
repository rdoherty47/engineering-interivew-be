import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs'
import { resolvers } from './resolvers/resolvers.js';
import { pgConnection } from './db/connection.js';


const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });

async function main() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true
    });

    try {
        await pgConnection.initialize()
    } catch (error) {
        console.log(`error connecting to postgres: ${error}`)
    }

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    
    console.log(`🚀  Server ready at: ${url}`);
}

main()
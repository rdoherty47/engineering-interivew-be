import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs'
import { resolvers } from './resolvers/resolvers.js';
import { pgConnection } from './db/connection.js';
import { getAuthenticatedUser } from './auth/auth.js';
import { dataSources } from './dataSources/data-sources.js';
import { DataSource } from 'typeorm';

const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });

async function main() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true
    });

    let db: DataSource // TypeORM data source (i.e. database connection)
    try {
        db = await pgConnection.initialize()
    } catch (error) {
        
    }

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async ({ req }) => ({
            user: getAuthenticatedUser(req),
            dataSources: await dataSources(db) // GraphQL data source (i.e. service layer)
        })
    });
    
    console.log(`🚀  Server ready at: ${url}`);
}

main()
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground, AuthenticationError } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import('./model/db')

import jwt from 'jsonwebtoken'
import { schema } from './schema/schema';

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        context: async ({ req }) => {
            const token = req.headers.authorization || '';
            // try to retrieve a user with the token
            let decodedToken = {}
            try {
                if (token && token !== 'null') {
                    decodedToken = jwt.verify(token, 'CUSTOM_TOKEN');
                }
            } catch (err) {
                console.log(err)
            }

            // optionally block the user
            // we could also check user roles/permissions here
            if (!decodedToken) throw new AuthenticationError('you must be logged in');

            return {
                decodedToken,
            }
        },
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        schema
    });
    await server.start();
    app.get('/custom-route', (req, res) => {
        res.send('Hello World!')
    })
    server.applyMiddleware({ app });
    const PORT = process.env.PORT || 4000
    await new Promise(resolve => httpServer.listen({ port: process.env.PORT || 4000 }, resolve as any));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer();

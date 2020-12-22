/** 
# closedTools.js

## Description
Configures Graphql server

## Usage
```shell
npm start
```

## Arguments/Parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB drawing traces tool web service

## License

## Author 


**/

// imports needed libraries
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from './closedToolsSchema';
import {resolvers} from './closedToolsResolver';
const conectarDB = require('../config/dbConnection');
require('dotenv').config();


// Make the connection to MongoDB using mongoose
conectarDB();

// Defining graphql server
const server = new ApolloServer({
    playground: true,
    typeDefs,
    resolvers,
    introspection: true,
    formatError: (err) => ({
        message: err.message,
        statusCode: err.extensions.exception.statusCode
    })
});

// create an instance of express to be used with ApolloServer
const app = express();


// apply express instance to apolloserver
server.applyMiddleware({
    app,
    cors:{
        origin: '*',
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
});

//Set an enviroment variable for the port (4000 by default)
const PORT = process.env.PORT || 4002;

//Server start
const servExpress = app.listen(PORT, ()=> console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`));
/** 
# indexClosedTools.js

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
const conectarDB = require('./dbConnection');
require('dotenv').config();


// Make the connection to MongoDB using mongoose
conectarDB();

// Defining graphql server
const server = new ApolloServer({
    playground: true,
    typeDefs,
    resolvers
});

// create an instance of express to be used with ApolloServer
const app = express();

// set a limiter  to the api
/*
const apiLimiter = rateLimit({
    windowsMs = 60000,
    max = 1000,
    message:{
        message: 'To many request',
        statusCode: '429'
    }
}); 
app.use(apiLimiter);
*/

// apply express instance to apolloserver
server.applyMiddleware({app});

//Server start
const servExpress = app.listen(4000, ()=> console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`));
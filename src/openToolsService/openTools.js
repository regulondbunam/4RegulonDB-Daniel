/** 
# openTools.js

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
RegulonDB Coexpression web service

## License

## Author 


**/

// imports needed libraries
import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import rateLimit from 'express-rate-limit';
import {typeDefsOpen} from './schemaOpenTools';
import {openResolvers} from './resolverOpenTools';
const {buildFederatedSchema} = require("@apollo/federation");
const conectarDB = require('../config/dbConnection');
require('dotenv').config();

//Make the connection to mongoDB
conectarDB();

const federatedSchema = buildFederatedSchema([{
    typeDefs: gql`${typeDefsOpen}`,
    resolvers: openResolvers
}]);

//Defining graphql server
const serverOpenTools = new ApolloServer({
    playground: true,
    schema: federatedSchema,
    introspection: true,
    formatError: (err) => ({
        message: err.message,
        statusCode: err.extensions.exception.statusCode
    })
})

// create an instance of express to be used with ApolloServer
const app = express();

//Set a variable to limit requests
const limiter = rateLimit({
    windowMs: 60000,
    max: 1000,
    message:{
        message: 'Too many requests',
        statusCode: 429
    }
});
//Assign limit to the API
app.use(limiter);

// apply express instance to apolloserver
serverOpenTools.applyMiddleware({
    app,
    cors:{
        origin: '*',
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
});

//Set an enviroment variable for the port (4000 by default)
const PORT = process.env.PORT || 4003;

//Server start
const servExpress = app.listen(PORT, ()=> console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${serverOpenTools.graphqlPath}`));


'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _schemaOpenTools = require('./schemaOpenTools');

var _resolverOpenTools = require('./resolverOpenTools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const conectarDB = require('../config/dbConnection');
require('dotenv').config();

//Make the connection to mongoDB
conectarDB();

//Defining graphql server
const serverOpenTools = new _apolloServerExpress.ApolloServer({
    playground: true,
    typeDefs: _schemaOpenTools.typeDefs,
    resolvers: _resolverOpenTools.openResolvers,
    introspection: true,
    formatError: err => ({
        message: err.message,
        statusCode: err.extensions.exception.statusCode
    })
});

// create an instance of express to be used with ApolloServer
const app = (0, _express2.default)();

// apply express instance to apolloserver
serverOpenTools.applyMiddleware({
    app,
    cors: {
        origin: '*',
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
});

//Set an enviroment variable for the port (4000 by default)
const PORT = process.env.PORT || 4003;

//Server start
const servExpress = app.listen(PORT, () => console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${serverOpenTools.graphqlPath}`));
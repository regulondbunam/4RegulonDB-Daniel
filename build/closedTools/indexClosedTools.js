'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _closedToolsSchema = require('./closedToolsSchema');

var _closedToolsResolver = require('./closedToolsResolver');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const conectarDB = require('./dbConnection');
require('dotenv').config();

// Make the connection to MongoDB using mongoose
conectarDB();

// Defining graphql server
const server = new _apolloServerExpress.ApolloServer({
    playground: true,
    typeDefs: _closedToolsSchema.typeDefs,
    resolvers: _closedToolsResolver.resolvers
});

// create an instance of express to be used with ApolloServer
const app = (0, _express2.default)();

// apply express instance to apolloserver
server.applyMiddleware({ app });

//Set an enviroment variable for the port (4000 by default)
const PORT = process.env.PORT || 4000;

//Server start
const servExpress = app.listen(PORT, () => console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`));
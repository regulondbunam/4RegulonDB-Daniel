'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _closedToolsSchema = require('./closedToolsSchema');

var _closedToolsResolver = require('./closedToolsResolver');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const conectarDB = require('./dbConnection');
//require('dotenv').config();


// Make the connection to MongoDB using mongoose
const uri = 'mongodb+srv://user:user@datamarts.iahyj.mongodb.net/regulondbdatamarts'; /** 
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

_mongoose2.default.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Defining graphql server
const server = new _apolloServerExpress.ApolloServer({
    playground: true,
    typeDefs: _closedToolsSchema.typeDefs,
    resolvers: _closedToolsResolver.resolvers
});

// create an instance of express to be used with ApolloServer
const app = (0, _express2.default)();

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
server.applyMiddleware({ app });

//Server start
const servExpress = app.listen(4000, () => console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`));
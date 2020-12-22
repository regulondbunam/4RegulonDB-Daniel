'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _schemaOpenTools = require('./schemaOpenTools');

var _resolverOpenTools = require('./resolverOpenTools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const conectarDB = require('../config/dbConnection');
require('dotenv').config();

conectarDB();

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

const app = (0, _express2.default)();

serverOpenTools.applyMiddleware({
    app,
    cors: {
        origin: '*'
    }
});

const PORT = process.env.PORT || 4003;

const servExpress = app.listen(PORT, () => console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${serverOpenTools.graphqlPath}`));
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _closedToolsSchema = require('./closedToolsSchema');

var _closedToolsResolver = require('./closedToolsResolver');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const uri = 'mongodb+srv://DanielMor:VHlxOJKC6jRBA6c9@datamarts.iahyj.mongodb.net/regulondbdatamarts?retryWrites=true&w=majority';

_mongoose2.default.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const server = new _apolloServerExpress.ApolloServer({
    playground: true,
    typeDefs: _closedToolsSchema.typeDefs,
    resolvers: _closedToolsResolver.resolvers
});

const app = (0, _express2.default)();
server.applyMiddleware({ app });

const servExpress = app.listen(4000, () => console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`));
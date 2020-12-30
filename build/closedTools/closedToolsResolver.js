'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _dttResolver = require('./dttService/dttResolver');

var _coexpressionResolver = require('../openToolsService/coexpressionService/coexpressionResolver');

// merge all resolvers files and exports them to index

// Import each resolver file
const resolvers = exports.resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_dttResolver.dttResolver, _coexpressionResolver.coexpressionResolver]);
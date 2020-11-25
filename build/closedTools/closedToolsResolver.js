'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _dttResolver = require('./dttService/dttResolver');

const resolvers = exports.resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_dttResolver.dttResolver]);
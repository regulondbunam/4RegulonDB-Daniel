'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openResolvers = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _coexpressionResolver = require('./coexpressionService/coexpressionResolver');

const openResolvers = exports.openResolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_coexpressionResolver.coexpressionResolver]);
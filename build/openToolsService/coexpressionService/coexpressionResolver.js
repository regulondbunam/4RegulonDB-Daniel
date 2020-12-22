'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coexpressionResolver = undefined;

var _coexpressionController = require('./coexpressionController');

const coexpressionResolver = exports.coexpressionResolver = {
    Query: {
        getGeneCoexpression: (root, { gene, limit }) => _coexpressionController.coexpressionController.getGeneCoexpression(gene, limit)
    }
};
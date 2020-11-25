'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dttResolver = undefined;

var _dttController = require('./dttController');

const dttResolver = exports.dttResolver = {
    Query: {
        getGeneticElementsFromInterval: (root, { leftEndPosition, rightEndPosition, strand, objectType, covered }) => _dttController.dttController.getGeneticElementsFromInterval(leftEndPosition, rightEndPosition, strand, objectType, covered)
    }
};
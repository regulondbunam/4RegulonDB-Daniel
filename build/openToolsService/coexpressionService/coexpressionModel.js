'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CoexpressionData = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const coexpressionDataObject = new _mongoose2.default.Schema({
    _id: String,
    gene_id1: String,
    gene_id2: String,
    locusTag1: String,
    locusTag2: String,
    gene_name1: String,
    gene_name2: String,
    rank: Number,
    organism: {
        organism_id: String,
        organism_name: String
    }
});

const CoexpressionData = _mongoose2.default.model('genecoexpressions', coexpressionDataObject, 'geneCoexpressions');

exports.CoexpressionData = CoexpressionData;
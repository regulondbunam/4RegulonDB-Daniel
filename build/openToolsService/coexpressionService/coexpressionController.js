'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coexpressionController = undefined;

var _graphql = require('graphql');

var _coexpressionModel = require('./coexpressionModel');

class coexpressionController {
    static getGeneCoexpression(gene, limit = 50) {
        if (gene === "") {
            const err = new _graphql.GraphQLError('Gene must have a valid string value');
            err.statusCode = 400;
            throw err;
        } else {
            if (limit > 50) limit = 50;
            // Defines a variable who make Case Insentive the parameter

            let geneCI = RegExp(gene, 'i');

            return _coexpressionModel.CoexpressionData.find({ $or: [{ gene_name1: geneCI }, { gene_name2: geneCI }] }).limit(limit).sort({ rank: 1 });
        }
    }
}

exports.coexpressionController = coexpressionController;
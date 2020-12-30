'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coexpressionResolver = undefined;

var _coexpressionController = require('./coexpressionController');

const coexpressionResolver = exports.coexpressionResolver = {
  Query: {
    getGeneCoexpression: (root, { id, gene, limit }) => _coexpressionController.coexpressionController.getGeneCoexpression(id, gene, limit),
    getMatrixHeatmap: (root, { secondaryGeneId, genesIdToCompare, secondaryGeneName, genesNameToCompare }) => _coexpressionController.coexpressionController.getMatrixHeatmap(secondaryGeneId, genesIdToCompare, secondaryGeneName, genesNameToCompare)
  }
}; /**
    # Coexpression service resolver
   
    ## Description
    Here are contained all resolver to defined queries in the Graphql schema
    it´s used for the server definition 
   
   ## Usage
   ```javascript
   import {coexpressionResolver} from './coexpressionResolver.js';
   ```
   
   ##Arguments/parameters
   N/A
   
   ## Examples
   
   ## Return 
   N/A
   
   ## Category
   RegulonDB coexpression web service
   
   ## License 
   
   ## Author 
   
    **/
// import coexpressionController to use functions defined in it
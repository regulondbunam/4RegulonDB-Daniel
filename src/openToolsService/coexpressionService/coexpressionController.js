/**
 # Coexpression service controller

 ## Description
 Here are defined all functions with all logic to connect and get data from db,
 they return responses obtained to the resolvers

## Usage
```javascript
import {coexpressionController} from './coexpressionController';
```

##Arguments/parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB Coexpression web service

## License 

## Author

**/
/**
# Function description

## getGeneCoexpression

_Description:_
This function return those genes expression in diferents conditions.

_Usage:_
```javascript
coexpressionController.getGeneCoexpression(id, gene , limit)
```
_Input parameters:_
_id:_ id of the gene
_gene:_ name of the gene
_limit:_ limit of the results (50 by default)

_Return:_
coexpressionController: [CoexpressionData]

## getMatrixHeatmap

_Description:_
This function returns a list of genes compare with top 50 of principal gene

_Usage:_
```javascript
coexpressionController.getMatrixHeatmap(secondaryGeneId, genesIdToCompare, secondaryGeneName , genesNameToCompare);
```
_Input parameters:_
_secondaryGeneId:_ ID of one of the genes to compare with principal gene top 50 in coexpression
_genesIdToCompare:_ ID list genes of the principal gene top 50  
_secondaryGeneName:_  Name of one of the genes to compare with principal gene top 50 in coexpression
_genesNameToCompare:_ Name list genes of the principal gene top 50

_Return:_
coexpressionController: [CoexpressionData]

**/
import { GraphQLError } from 'graphql';
//import defined model of the collection to be used
import {CoexpressionData} from './coexpressionModel';

class coexpressionController {
    static getGeneCoexpression( id, gene, limit = 50){
        //The value of limit must be 50 maximum, when its more it takes the default value (50)
        if(limit > 50) limit = 50;

        //When the user make a search by id, the service execute this query by gene id
        if(id !== undefined)
        {
            return CoexpressionData.find({$or:[{"gene_id1": id},{"gene_id2": id}]}).limit(limit).sort({"rank":1});
        }
        else
        {
            if (gene === ""){
                const err = new GraphQLError('Gene must have a valid string value');
                err.statusCode=400;
                throw err;
            }
            else{
                 // Defines a variable who make Case Insentive the parameter
                let geneCI = RegExp(gene,'i');
                
                // When the user make a search by name , the service execute this query by name 
                return CoexpressionData.find({$or:[{"gene_name1": geneCI},{"gene_name2": geneCI}]}).limit(limit).sort({"rank":1});
            }
        }
        
    }

    static getMatrixHeatmap(secondaryGeneId, genesIdToCompare, secondaryGeneName, genesNameToCompare){
        if(secondaryGeneId !== undefined && genesIdToCompare !== undefined)
        {
            return CoexpressionData.find({$or:[{$and:[{"gene_id1": secondaryGeneId},{"gene_id2": {$in: genesIdToCompare}}]},
                                               {$and:[{"gene_id1":{$in: genesIdToCompare}},{"gene_id2": {$in: genesIdToCompare}}]}]}).sort({"rank":1});
        }
        else if(secondaryGeneName !== undefined && genesNameToCompare !== undefined){
            // This function makes the string as Case Insensitive
            let secondaryGeneNameCI = RegExp(secondaryGeneName,'i');
            return CoexpressionData.find({$or:[{$and:[{"gene_name1":secondaryGeneNameCI},{"gene_name2":{$in: genesNameToCompare}}]},
                                               {$and:[{"gene_name1":{$in: genesNameToCompare}},{"gene_name2":secondaryGeneNameCI}]}]}).sort({"rank":1});
        }
        else {
            const err = new GraphQLError('Variables not defined correctly');
            err.statusCode=400;
            throw err; 
        }
    }
}

export {coexpressionController};
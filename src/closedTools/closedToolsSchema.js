// Import all libraries to used
import {mergeTypes} from 'merge-graphql-schemas';
import {gql} from 'apollo-server-express';
import fs from 'fs';

//Read all graphql schemas
const Dtt = gql `${fs.readFileSync('./src/closedTools/dttService/dttSchema.graphql').toString()}`;
const Coexp = gql `${fs.readFileSync('./src/openToolsService/coexpressionService/coexpressionSchema.graphql').toString()}`;

//exports the object that contains all merge schemas
export const typeDefs = mergeTypes([Dtt,Coexp],{all: true});
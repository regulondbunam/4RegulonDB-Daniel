//Import needed libraries
import {mergeResolvers} from 'merge-graphql-schemas';
//Import each resolver from his own file
import {coexpressionResolver} from './coexpressionService/coexpressionResolver';

//Merge all resolvers and exports them to openTools.js
export const openResolvers = mergeResolvers([coexpressionResolver]);
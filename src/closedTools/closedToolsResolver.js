import {mergeResolvers} from 'merge-graphql-schemas';
// Import each resolver file
import {dttResolver} from './dttService/dttResolver';
import {coexpressionResolver} from '../openToolsService/coexpressionService/coexpressionResolver'

// merge all resolvers files and exports them to index
export const resolvers = mergeResolvers([dttResolver,coexpressionResolver]);
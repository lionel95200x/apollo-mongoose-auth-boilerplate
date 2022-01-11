import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
const { constraintDirectiveTypeDefs } = require('graphql-constraint-directive')

export const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'));
export const resolversArray = loadFilesSync(path.join(__dirname, './**/*.resolver.*'));
export const mocksArray = loadFilesSync(path.join(__dirname, './**/*.mocks.*'));

export const mocks = Object.assign({}, ...mocksArray);

export const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([constraintDirectiveTypeDefs, typesArray]),
    resolvers: mergeResolvers(resolversArray),

});

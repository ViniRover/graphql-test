import { GraphQLList, GraphQLString, GraphQLInputObjectType } from 'graphql';

import { saveComment, getComments } from './CommentResolver';
import CommentType from './CommentType';

export const queries = {
  comments: {
    type: GraphQLList(CommentType),
    resolve: getComments,
  }
};

export const mutations = {
  saveComment: {
    type: CommentType,
    resolve: saveComment,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'CommentInput',
          fields: {
            name: {
              type: GraphQLString,
            },
            content: {
              type: GraphQLString,
            },
          },
        }),
      }
    },
  },
};
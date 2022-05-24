const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')
const { User, Post } = require('../models')

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        // posts: {

        // }
    })
})

const PostType = new GraphQLObjectType({
    name: 'Question', 
    description: 'Question Type',
    fields: () => ({
        id: { type: GraphQLID }, 
        body: { type: GraphQLString },
        author: { type: GraphQLString }, 
        postId: { type: GraphQLString }

    })
})

module.exports = {
    UserType,
    PostType
}
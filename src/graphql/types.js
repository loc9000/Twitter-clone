const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql')
const { User, Post } = require('../models')

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        posts: {
            type: GraphQLList(PostType),
            resolve(parent, args){
                return Post.find({ userId: parent.id })
            }
        }
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post', 
    description: 'Post Type',
    fields: () => ({
        id: { type: GraphQLID }, 
        slug: { type: GraphQLString },
        body: { type: GraphQLString },
        author: { type: GraphQLString }, 
        postId: { type: GraphQLString }

    })
})

module.exports = {
    UserType,
    PostType
}
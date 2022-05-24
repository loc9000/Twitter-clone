const { UserType, PostType } = require('./types')
const { User, Post } = require('../models')
const { GraphQLList, GraphQLID } = require('graphql')

const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users in the database', 
    resolve(parent, args){
        return User.find()
    }
}

const user = {
    type: UserType,
    description: 'Query a user in the database',
    args: {
        id: { type: GraphQLID}
    },
    resolve(parent, args) {
        return User.findById(args.id)
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description: "Query all posts in the database",
    resolve(parent, args){
        return Post.find()
    }
}

const post = {
    type: PostType,
    description: 'Query a post in the database', 
    args: {
        id: { type: GraphQLID}
    },
    resolve(parent, args) {
        return Post.findById(args.id)
    }
}

module.exports = { user, users, post, posts }
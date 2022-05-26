const { GraphQLString, GraphQLInt } = require('graphql')
const { User, Post } = require('../models')

const register = {
    type: GraphQLString,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        
    }, 
    async resolve(parent, args) {
        const { username, password, email } = args

        const user = new User({ username, email, password })

        await user.save()

        return 'User signed up'

    }
}

const post = {
    type: GraphQLString,
    args: {
        body: { type: GraphQLString }, 
        author: { type: GraphQLString },
        postId: { type: GraphQLInt}
    },
    async resolve(parent, args) {
        const { body, author, postId } = args

        const post = new Post({ body, author, postId})

        await post.save()

        return 'New post created'
    }

}

module.exports = { register, post }
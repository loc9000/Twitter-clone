const { GraphQLString, GraphQLInt } = require('graphql')
const { User, Post } = require('../models')
const createJwtToken = require("../util/auth")
const { UserType, PostType } = require('./types')

const register = {
    type: GraphQLString,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString }
    }, 
    async resolve(parent, args) {
        const { username, password, email } = args

        const user = new User({ username, email, password })

        await user.save()

        const token = createJwtToken(user)
        return token

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

const login = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const user = await User.findOne({ email: args.email });

    if (!user || args.password !== user.password) {
      throw new Error("Invalid credentials");
    }

    const token = createJwtToken(user);
    return token;
  },
};



module.exports = { register, post, login}
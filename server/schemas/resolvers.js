const { AuthenticationError } = require('apollo-server-express')
const { } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
 
    },
    Mutation: {
        addUser: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
      
            return { token, user };
        },
    }
}
module.exports = resolvers;
const { bookSchema, User } = require('../models');

const resolvers = {
    Query: {
        getSingleUser: async () => {
            return User.find({});
        }

    },
    Mutation: {
        createUser: async ( parent, args) => {
            const user = await User.create(args);
            return user;
        },
        //saveBook:
        //deleteBook:
    }
};

module.exports = resolvers;
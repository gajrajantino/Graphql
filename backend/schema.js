const { gql } = require("apollo-server-express");
const { Books } = require("./models/books");
const { Reviews } = require("./models/reviews");

const typeDefs = gql`
    type Book {
        name: String!
        price: Float!
    }
    type Review {
        bookId: String!
        text: String!
        stars: Int!
    }
    type Query {
        getBook(id: String!): Book
        getBooks: [Book]
        getReviews(bookId: String!): [Review]
    }
    type Mutation {
        addBook(name: String!, price: Float!): Book
        deleteBook(id: String!): Book
        addReview(bookId: String!, text: String!, stars: Int!): Review
        deleteReview(id: String!): Review
    }
`;

const resolvers = {
    Query: {
        getBooks: async () => {
            const books = await Books.find();
            return books;
        },
        getBook: async (parent, args) => {
            return Books.findById(args.id);
        },
        getReviews: async (parent, args) => {
            return Reviews.find({ bookId: args.bookId });
        },
    },
    Mutation: {
        addBook: async (parent, args) => {
            const Books_ = new Books({
                name: args.name,
                price: args.price,
            });
            return await Books_.save();
        },
        deleteBook: async (parent, args) => {
            return await Books.findByIdAndDelete(args.id);
        },
        addReview: async (parent, args) => {
            const Reviews_ = new Reviews({
                bookId: args.bookId,
                text: args.text,
                stars: args.stars,
            });
            return await Reviews_.save();
        },
        deleteReview: async (parent, args) => {
            return await Reviews.findByIdAndDelete(args.id);
        },
    },
};

module.exports = { resolvers, typeDefs };

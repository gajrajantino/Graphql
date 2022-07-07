const express = require("express");
const mongoose = require("mongoose");
const schema = require("./schema");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const url = "mongodb://localhost:27017/graphql";

const startServer = async () => {
    const connect = mongoose.connect(url, { useNewUrlParser: true });
    console.log("Connected correctly to server!");
    const server = new ApolloServer({
        typeDefs: schema.typeDefs,
        resolvers: schema.resolvers,
        playground: {
            settings: {
                "editor.theme": "light",
            },
        },
    });
    const app = express();
    app.use(bodyParser.json());
    app.use("*", cors());
    await server.start();
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () =>
        console.log(
            `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        )
    );
};

startServer();

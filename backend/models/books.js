const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const booksSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Books = mongoose.model("Books", booksSchema);
module.exports = { Books, booksSchema };

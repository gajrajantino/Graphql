const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewsSchema = new Schema(
    {
        bookId: {
            type: Schema.Types.ObjectId,
            ref: "Books",
        },
        text: {
            type: String,
        },
        stars: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports = { Reviews, reviewsSchema };

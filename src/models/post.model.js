const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        body: {
            type: String,
            required: true

        },
        author: {
            type: String,
            required: true
        },
        postId: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("post", postSchema)
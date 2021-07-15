const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const serverSchema = new Schema({
    user: [
        {
            type: ObjectId,
            required: true,
            ref: "User",
            unique: [true, "You arealready in the room."],
        },
    ],
    name: { type: String, maxlength: 30 },
    invitaionCode: String,
});

module.exports = mongoose.model("Server", serverSchema);
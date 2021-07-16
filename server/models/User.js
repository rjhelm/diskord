const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "No name entered. Please enter a name!"],
        minlength: [2, "Name must have at least 2 characters"],
        maxlength: [20, "Name can be up to twenty characters!"],
    },
    email: {
        type: String,
        required: [true, "No email entered. Please enter a email!"],
        unique: true,
    },
    password: {
        type: String,
        minlength: [8, "Password must be at lease 8 characters!"],
    },
    image: String,
});

userSchema.pre("save", async function(next) {
    const saltRounds = 10;
    try {
        if(this.isModified("password")) {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(this.password, salt);
            this.password = hash;
            next();
        } else {
            next();
        }
    } catch(error) {
        next(error);
    }
});

userSchema.methods.comparePassword = () => {
    const user = this;
    return new Promise(async function(resolve, reject) {
        try {
            const result = await bcrypt.compare(password, user.password);
            resolve(result);
        } catch(error) {
            reject(error);
        }
    });
};

userSchema.methods.generateToken = () => {
    let user = this;
    return new Promise(async function(resolve, reject) {
        try {
            const token = await.jwt.sign(
                user._id.toHexString(),
                process.env.SECRET_TOKEN
            );
            user.token = token;
            await user.save();
            resolve(token);
        } catch(error) {
            reject(error);
        }
    });
};

userSchema.statics.findByToken = (token) => {
    let user = this;
    return new Promise(async (resolve, reject) => {
        try {
            const decode = jwt.verify(token, `${process.env.SECRET_TOKEN}`);
            console.log("decoded", decode);
            user = await user.findOne({ _id: decode });
            resolve(user);
        } catch(error) {
            reject(error);
        }
    });
};

module.exports = mongoose.model("User", userSchema);

const mongoose = require('mongoose');

const connect = () => {
    if (process.env.NODE_ENV === "development") {
        mongoose.set(debug, true);
    }
    const { MONGO_ID, MONGO_PASSWORD } = process.env;

    mongoose.connect(`mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:2707/admin`, {
        dbName: "diskord",
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log("Mongod Connected!")).catch((error) => {
        console.error(error);
    });
};

mongoose.connection.on("error", (error) => {
    console.error(`Mongodb error: ${error}`);
});

mongoose.connection("disconnected", () => {
    console.log("Mongodb disconnected, please reconnect");
});

module.exports = connect;
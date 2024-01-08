import { connect, connection } from "mongoose";

const conn = {
    isConnected: false
};

export async function connectDB() {
    if (conn.isConnected) return;

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 30000,
        connectTimeoutMS: 30000
    };

    try {
        const db = await connect("mongodb+srv://marcosfacchetti9n:pIP2mInOncpEleS1@cluster1.ta4frcx.mongodb.net/?retryWrites=true&w=majority", options);

        console.log(db.connection.db.databaseName);
        conn.isConnected = db.connections[0].readyState;

        connection.on("connected", () => {
            console.log("Mongoose is connected");
        });

        connection.on("error", (err) => {
            console.log("Mongoose connection error", err);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

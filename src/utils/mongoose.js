import {connect, connection} from "mongoose";

const conn = {
    isConnected: false
}


export async function connectDB(){

    if (conn.isConnected) return;

    //const db = await connect("mongodb://localhost/nextmongocrud")
    const db = await connect("mongodb+srv://marcosfacchetti9n:pIP2mInOncpEleS1@cluster1.ta4frcx.mongodb.net/?retryWrites=true&w=majority")

    console.log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState
}

connection.on("connected", () => {
    console.log("Mongose is connected")
})

connection.on("error", (err) => {
    console.log("Mongose connection error", err)
})


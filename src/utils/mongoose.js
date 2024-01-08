import { connect, connection } from "mongoose";

const conn = {
    isConnected: false
}

export async function connectDB() {
    if (conn.isConnected) return;

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Establecer tiempos de espera en milisegundos
        // Puedes ajustar estos valores según tus necesidades y la capacidad de respuesta de tu base de datos
        socketTimeoutMS: 30000, // Tiempo de espera para operaciones de red
        connectTimeoutMS: 30000 // Tiempo de espera para la conexión inicial
    };

    // Conectar con las opciones configuradas
    const db = await connect("mongodb+srv://marcosfacchetti9n:pIP2mInOncpEleS1@cluster1.ta4frcx.mongodb.net/?retryWrites=true&w=majority", options);

    conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
    console.log("Mongoose is connected");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error", err);
});

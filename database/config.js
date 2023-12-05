import mongoose from 'mongoose';
export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGO);
       // console.log("Base de datos conectada");
    } catch (error) {
        throw new Error("Error al iniciar la base de datos: " + error)
    }
}

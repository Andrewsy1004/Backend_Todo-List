import mongoose from "mongoose";

const NotasSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    nota:{
        type: String,
        required: [true, 'La nota es obligatoria'],
        unique: true,
    },
    estado: {
        type: String,
        required: true,
        enum: ["Terminado", "Sin terminar"],
    },
    estadoT : {
        type: Boolean,
        default: true,
    },
})

const notas = mongoose.model('notasU', NotasSchema);
export default notas;
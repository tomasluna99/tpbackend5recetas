import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
    nombreReceta: {
        type: String,
        required: true,
        unique: true,
        minLenght: 2,
        maxLenght: 100,
    },
    categoria: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
        minLenght: 15,
        maxLenght: 200,
    },
    ingredientes: {
        type: String,
        required: true,
        minLenght: 15,
        maxLenght: 200,
    },
    preparacion: {
        type: String,
        required: true,
        minLenght: 20,
        maxLenght: 1500,
    },
});

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;

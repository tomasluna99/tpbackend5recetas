import { validationResult } from "express-validator";
import Receta from "../models/receta";

export const listarRecetas = async (req, res) => {
    try {
        //buscar en la BD la collection de productos
        const recetas = await Receta.find();
        //enviar respuesa al frontend
        res.status(200).json(recetas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al buscar las recetas",
        });
    }
};
export const agregarReceta = async (req, res) => {
    try {
        //trabajar con el resultado de la validacion
        const errors = validationResult(req);
        //errors.isEmpty()true o flase dependiendo si tiene o no errores
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errores: errors.array(),
            });
        }

        console.log(req.body);
        //tomar el body y validarlo
        //guardar el objeto en la BD
        const recetaNueva = new Producto(req.body);
        await recetaNueva.save();
        res.status(201).json({
            mensaje: "La receta fue agregada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "ocurrio un error al intentar agregar la receta",
        });
    }
};
export const obtenerReceta = async (req, res) => {
    try {
        //extraer id de la ruta
        console.log(req.params.id);
        //buscar en la BD el producto que tenga ese id
        const recetaBuscada = await Receta.findById(req.params.id);
        //responder al frontend con el objeto encontrado
        res.status(200).json(recetaBuscada);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al buscar la Receta",
        });
    }
};
export const editarReceta = async (req, res) => {
    try {
        //extraer id de la ruta y los datos del objeto a actualizar
        //validar los datos y luego solicitar a la BD actualizar el producto
        await Receta.findByIdAndUpdate(req.params.id, req.body);
        //respondemos al fe
        res.status(200).json({
            mensaje: "Receta editada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al intentar editar la receta",
        });
    }
};
export const borrarReceta = async (req, res) => {
    try {
        //extraer id de la ruta  y luego solicitar a la BD borrar el producto
        await Receta.findByIdAndDelete(req.params.id);
        //respondemos al FE
        res.status(200).json({
            mensaje: "Receta borrada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar borrar la receta",
        });
    }
};

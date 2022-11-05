import { Router } from "express";
import { borrarReceta, agregarReceta, editarReceta, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers";
import { check } from "express-validator";
const router = Router();
router
    .route("/recetas")
    .get(listarRecetas)
    .post(
        [
            check("nombreReceta")
                .notEmpty()
                .withMessage("El nombre de la receta es un dato obligatorio")
                .isLength({ min: 2, max: 100 })
                .withMessage("El nombre de la receta debe tener entre 2 y 100 caracteres"),
            check("categoria")
                .notEmpty()
                .withMessage("La categoria es un dato obligatorio")
                .isIn(["comidas", "desayunos", "ensaladas", "snacks"])
                .withMessage("Debe ingresar una categoría valida"),
            check("imagen")
                .notEmpty()
                .withMessage("El link de la imagen es un dato obligatorio")
                .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
                .withMessage("debes ingresar una url valida"),
            check("descripcion")
                .notEmpty()
                .withMessage("La descripcion de la receta es un dato obligatorio")
                .isLength({ min: 15, max: 200 })
                .withMessage("La descripcion de la receta debe tener entre 15 y 200 caracteres"),
            check("ingredientes")
                .notEmpty()
                .withMessage("Los ingredientes de la receta es un dato obligatorio")
                .isLength({ min: 15, max: 200 })
                .withMessage("Los ingredientes de la receta deben tener entre 15 y 200 caracteres"),
            check("preparacion")
                .notEmpty()
                .withMessage("La preparacion de la receta es un dato obligatorio")
                .isLength({ min: 20, max: 1500 })
                .withMessage("Los ingredientes de la receta deben tener entre 20 y 1500 caracteres"),
        ],
        agregarReceta
    );
router
    .route("/recetas/:id")
    .get(obtenerReceta)
    .put(
        [
            check("nombreReceta")
                .notEmpty()
                .withMessage("El nombre de la receta es un dato obligatorio")
                .isLength({ min: 2, max: 100 })
                .withMessage("El nombre de la receta debe tener entre 2 y 100 caracteres"),
            check("categoria")
                .notEmpty()
                .withMessage("La categoria es un dato obligatorio")
                .isIn(["comidas", "desayunos", "ensaladas", "snacks"])
                .withMessage("Debe ingresar una categoría valida"),
            check("imagen")
                .notEmpty()
                .withMessage("El link de la imagen es un dato obligatorio")
                .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
                .withMessage("debes ingresar una url valida"),
            check("descripcion")
                .notEmpty()
                .withMessage("La descripcion de la receta es un dato obligatorio")
                .isLength({ min: 15, max: 200 })
                .withMessage("La descripcion de la receta debe tener entre 15 y 200 caracteres"),
            check("ingredientes")
                .notEmpty()
                .withMessage("Los ingredientes de la receta es un dato obligatorio")
                .isLength({ min: 15, max: 200 })
                .withMessage("Los ingredientes de la receta deben tener entre 15 y 200 caracteres"),
            check("preparacion")
                .notEmpty()
                .withMessage("La preparacion de la receta es un dato obligatorio")
                .isLength({ min: 20, max: 1500 })
                .withMessage("Los ingredientes de la receta deben tener entre 20 y 1500 caracteres"),
        ],
        editarReceta
    )
    .delete(borrarReceta);
export default router;

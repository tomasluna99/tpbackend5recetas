//ejercicio 5 de recetas unido al tp react
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import recetaRouter from "./routes/recetas.routes";
import "./database";


const app = express();
//puerto
app.set("port", process.env.PORT || 4006);

app.listen(app.get("port"), () => {
    console.log("estoy en el puerto " + app.get("port"));
});


app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extends: true })); 
app.use(morgan("dev"));
//archivo estatico
app.use(express.static(path.join(__dirname, "../public")));

//rutas
app.use("/apirecetas", recetaRouter);

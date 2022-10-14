import express from "express";
const usuarioRoutes = express.Router();

import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioController.js";

import checkAuth from "../middleware/checkAuth.js";

//Autenticación, Creación Registro y Confirmación de Usuarios
usuarioRoutes.post("/", registrar);
usuarioRoutes.post("/login", autenticar);
usuarioRoutes.get("/confirmar/:token", confirmar);
usuarioRoutes.post("/olvide-password", olvidePassword);
usuarioRoutes
  .route("/olvide-password/:token")
  .get(comprobarToken)
  .post(nuevoPassword);

usuarioRoutes.get("/perfil", checkAuth, perfil);

export default usuarioRoutes;

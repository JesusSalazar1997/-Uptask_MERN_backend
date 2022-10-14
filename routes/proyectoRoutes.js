import express from "express";
const proyectoRouter = express.Router();
import {
  obtenerProyectos,
  nuevoProyecto,
  obtenerProyecto,
  editarProyecto,
  eliminarProyecto,
  buscarColaborador,
  agregarColaborador,
  eliminarColaborador,
} from "../controllers/proyectoController.js";
import checkAuth from "../middleware/checkAuth.js";

proyectoRouter
  .route("/")
  .get(checkAuth, obtenerProyectos)
  .post(checkAuth, nuevoProyecto);

proyectoRouter
  .route("/:id")
  .get(checkAuth, obtenerProyecto)
  .put(checkAuth, editarProyecto)
  .delete(checkAuth, eliminarProyecto);

proyectoRouter.post("/colaboradores", checkAuth, buscarColaborador);
proyectoRouter.post("/colaboradores/:id", checkAuth, agregarColaborador);
proyectoRouter.post(
  "/eliminar-colaborador/:id",
  checkAuth,
  eliminarColaborador
);

export default proyectoRouter;

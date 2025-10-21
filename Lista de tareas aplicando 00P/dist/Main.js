"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Interfas_1 = require("./Interfas");
const CrearTarea_1 = require("./CrearTarea");
const VisualizarTareas_1 = require("./VisualizarTareas");
const BuscarTarea_1 = require("./BuscarTarea");
const Controles_1 = require("./Controles");
function main() {
    let opcion = 0;
    let tareas = [];
    let tarea = null;
    do {
        (0, Interfas_1.menu)();
        opcion = (0, Controles_1.pedirNumero)("", 0, 3, false);
        switch (opcion) {
            // Caso de "VER MIS TAREAS "
            case 1:
                console.clear();
                if (tareas.length === 0) {
                    console.log("No hay tareas creadas");
                    break;
                }
                (0, VisualizarTareas_1.VerMisTareas)(tareas);
                break;
            // Caso de "BUSCAR UNA TAREA"
            case 2:
                if (tareas.length === 0) {
                    console.clear();
                    console.log("No hay tareas creadas");
                    break;
                }
                (0, BuscarTarea_1.BuscarTarea)(tareas);
                break;
            //Caso de "AGREGAR TAREAS"
            case 3:
                console.clear();
                tareas.push((0, CrearTarea_1.CrearTarea)(tareas));
                console.log("");
                break;
            case 0:
                console.log("Saliendo....");
                break;
        }
    } while (opcion != 0);
}
main();

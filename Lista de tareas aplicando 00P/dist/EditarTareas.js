"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditarTarea = EditarTarea;
const Tareas_1 = require("./Tareas");
const Controles_1 = require("./Controles");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function EditarTarea(tarea) {
    var _a;
    let validacion = true;
    let input = "";
    console.clear();
    let descripcionInput = "";
    //Descripcion
    if ((0, Controles_1.Confirmacion)("Desea cambiar la descripcion de la tarea ?") === "y") {
        do {
            validacion = false;
            descripcionInput = ((_a = prompt("Ingrese la descripcion de la tarea (max 500 caracteres): ")) === null || _a === void 0 ? void 0 : _a.trim()) || ""; // elimino los caracters vacios
            if (descripcionInput.length === 0) {
                if ((0, Controles_1.Confirmacion)("Esta dejando la descripcion vacia, desea hacerlo ? ").toLowerCase() === "y") {
                    validacion = false;
                }
                else {
                    validacion = true;
                }
            }
            if (descripcionInput.length > 500) {
                if ((0, Controles_1.Confirmacion)("la descripcion supero los 500 caracteres, desea recortarla ?").toLowerCase() === "y") {
                    descripcionInput = descripcionInput.slice(0, 500);
                    validacion = false;
                }
                else {
                    validacion = true;
                }
            }
        } while (validacion);
        console.clear();
        tarea.SetDescripcion(descripcionInput);
    }
    //Estado
    if ((0, Controles_1.Confirmacion)("Desea cambiar el estado de la tarea?") === "y") {
        console.log("Ingrese el estado de la tarea");
        for (let i = 0; i < Tareas_1.estado.length; i++) {
            console.log(`[${i + 1}] ${Tareas_1.estado[i]}`);
        }
        tarea.SetEstado(Tareas_1.estado[(0, Controles_1.pedirNumero)("Porfavor ingrese una de las opcines", 1, Tareas_1.estado.length, false) - 1]);
        console.clear();
    }
    //Dificultad
    //utilizara la misma logica que se uso en estado 
    if ((0, Controles_1.Confirmacion)("Desea cambiar la dificultad de la tarea?: ") === "y") {
        for (let i = 0; i < Tareas_1.dificultad.length; i++) {
            console.log(`[${i + 1}] ${Tareas_1.dificultad[i]}`);
        }
        tarea.SetDificultad(Tareas_1.dificultad[(0, Controles_1.pedirNumero)("Porfavor ingrese una de las opcines de dificultad: ", 1, Tareas_1.dificultad.length, false) - 1]);
    }
    if ((0, Controles_1.Confirmacion)("Desea cambiar la fecha de vencimiento de la tarea?: ") === "y") {
        console.log("ingrese la fecha de vencimiento");
        let dia = (0, Controles_1.pedirNumero)("Dia de vencimiento de la tarea: ", 1, 31, false);
        let mes = (0, Controles_1.pedirNumero)("Mes de vencimiento de la tarea: ", 1, 12, false);
        let año = (0, Controles_1.pedirNumero)("Año de vencimiento de la tarea: ", 1900, 2100, false);
        tarea.SetFechaVencimiento(año, mes, dia);
    }
    tarea.SetFechaEdicion();
    console.clear();
    return tarea;
}

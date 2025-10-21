"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarTarea = BuscarTarea;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function BuscarTarea(tareas) {
    var _a;
    let encontrada = false;
    console.clear();
    console.log("Indique el titulo de la tarea a buscar");
    let titulo = ((_a = prompt("titulo: ")) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].GetTitulo() === titulo) {
            console.log("tarea encontrada");
            const tarea = tareas[i];
            console.log(`[${i + 1}] ${tarea.GetTitulo()}`);
            encontrada = true;
            tarea.VerTarea();
        }
        if (!encontrada) {
            console.log("Tarea no encontrada, Volviendo al menu ...");
            return;
        }
    }
}

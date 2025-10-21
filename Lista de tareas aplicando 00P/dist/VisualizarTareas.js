"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerMisTareas = VerMisTareas;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Tareas_1 = require("./Tareas");
const EditarTareas_1 = require("./EditarTareas");
const Interfas_1 = require("./Interfas");
const Controles_1 = require("./Controles");
function Seleccion(tareas, indice, formaOrdenada) {
    let indices = [];
    let contador = 0;
    console.clear();
    console.log(`  --------  Tareas Ordenadas de forma ${formaOrdenada}  --------  `);
    console.log(`Estado: ${Tareas_1.estado[indice]}`);
    console.log("");
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].GetEstado() === Tareas_1.estado[indice]) {
            contador++;
            indices.push(i);
            console.log(`[${contador}]. ${tareas[i].GetTitulo()}`);
        }
    }
    console.log("");
    return tareas[indices[(0, Controles_1.pedirNumero)("Porfavor seleccione una tarea para visualizar: ", 1, indices.length, false) - 1]];
}
//Tipo de ordenamiento 
function Titulo(tareas) {
    let ayudante;
    //metodo de resolucion : Ordenamiento burbuja 
    for (let i = 0; i < tareas.length - 1; i++) {
        for (let j = 0; j < tareas.length - 1; j++) {
            /*funcion que busque con la ia
            devuelve -1 si el titulo 1 es menor al titulo 2 , 0 si son iguales y 1 si es titulo 2> titulo 1
            parametro "es" = hay letras que en ingles van antes que en español
            sensitivity = base lo ponemos para no prestar atencion a las mayusculas y tildes
            ignorePunctuation: true  ignora los guiones y etc */
            if (tareas[j].GetTitulo().localeCompare(tareas[j + 1].GetTitulo(), `es`, { sensitivity: 'base', ignorePunctuation: true }) == 1) {
                // ojo que estoy intercambiando direcciones
                ayudante = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = ayudante;
            }
        }
    }
    return tareas;
}
//Tipo de ordenamiento
function FechaVencimiento(tareas) {
    let ayudante;
    for (let i = 0; i < tareas.length - 1; i++) {
        for (let j = 0; j < tareas.length - 1; j++) {
            if (tareas[j].GetFechaVencimiento().getTime() > tareas[j + 1].GetFechaVencimiento().getTime()) {
                let aux = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = aux;
            }
        }
    }
    return tareas;
}
//Tipo de ordenamiento
//getTime calcula los milisecgundos de 1970 hasta la fecha y compara 
function FechaCreacion(tareas) {
    for (let i = 0; i < tareas.length - 1; i++) {
        for (let j = 0; j < tareas.length - 1; j++) {
            if (tareas[j].GetFechaCreacion().getTime() > tareas[j + 1].GetFechaCreacion().getTime()) {
                let aux = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = aux;
            }
        }
    }
    return tareas;
}
function Ordenamientos(tareas, indice) {
    let tarea;
    switch ((0, Controles_1.pedirNumero)("Porfavor eliga una opcion: ", 1, 3, false)) {
        case 1:
            //ojo que hay una funcion que recibe otra funcion
            tarea = Seleccion(Titulo(tareas), indice - 1, "Alfabetico ascendente");
            tarea.VerTarea();
            if ((0, Controles_1.Confirmacion)("Desea modificar los datos de la tarea?") == "y") {
                (0, EditarTareas_1.EditarTarea)(tarea);
            }
            else {
                console.log("Volviendo al menu...");
            }
            break;
        case 2:
            tarea = Seleccion(FechaVencimiento(tareas), indice - 1, "fecha de vencimiento ascendente");
            tarea.VerTarea();
            if ((0, Controles_1.Confirmacion)("Desea modificar los datos de la tarea?") == "y") {
                (0, EditarTareas_1.EditarTarea)(tarea);
            }
            else {
                console.log("Volviendo al menu...");
            }
            break;
        case 3:
            tarea = Seleccion(FechaCreacion(tareas), indice - 1, "fecha de creacion ascendente");
            tarea.VerTarea();
            if ((0, Controles_1.Confirmacion)("Desea modificar los datos de la tarea?") == "y") {
                (0, EditarTareas_1.EditarTarea)(tarea);
            }
            else {
                console.log("Volviendo al menu...");
            }
            break;
    }
}
function VisualizarTipoTarea(tareas, indice) {
    console.clear();
    let opcion;
    let tarea;
    let validacion = false;
    if (indice < 4) {
        //Verifica si tiene tareas del tipo que eligio
        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].GetEstado() == Tareas_1.estado[indice - 1]) {
                validacion = true;
            }
        }
        if (!validacion) {
            console.clear();
            console.log(`No tiene tareas del tipo ${Tareas_1.estado[indice - 1]}`);
            return;
        }
        (0, Interfas_1.FormaDeVer)();
        console.log("");
        Ordenamientos(tareas, indice);
    }
    else {
        console.log(" -------- Todas las tareas  -------- ");
        for (let i = 0; i < tareas.length; i++) {
            console.log(`[${i + 1}]. ${tareas[i].GetTitulo()} (Estado: ${tareas[i].GetEstado()})`);
        }
        opcion = (0, Controles_1.pedirNumero)("Porfavor indique la tarea que desea ver: ", 1, tareas.length, false);
        console.clear();
        tareas[opcion - 1].VerTarea();
        if ((0, Controles_1.Confirmacion)("Desea modificar los datos de la tarea?: ") == "y") {
            (0, EditarTareas_1.EditarTarea)(tareas[opcion - 1]);
        }
        else {
            console.log("Volviendo al menu...");
        }
    }
}
function VerMisTareas(tareas) {
    let indice;
    (0, Interfas_1.VerTipos)();
    console.log();
    indice = (0, Controles_1.pedirNumero)("Porfavor elige una tipo: ", 1, Tareas_1.estado.length, false);
    VisualizarTipoTarea(tareas, indice);
}

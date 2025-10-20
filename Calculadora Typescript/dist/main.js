"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const operaciones_1 = require("./operaciones");
function main() {
    var _a;
    const calculo = new operaciones_1.Operaciones();
    let opcion;
    do {
        console.log("Menu de Operaciones:");
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("5. Salir");
        opcion = Number(prompt("Seleccione una opción: "));
        switch (opcion) {
            case 1: {
                const num1 = Number(prompt("Ingrese el primer número: "));
                if (isNaN(num1)) {
                    console.log("Error: Debe ingresar un número válido.");
                    break;
                }
                const num2 = Number(prompt("Ingrese el segundo número: "));
                if (isNaN(num2)) {
                    console.log("Error: Debe ingresar un número válido.");
                    break;
                }
                const resultadoSuma = calculo.sumar(num1, num2);
                console.log(`El resultado de la suma es: ${resultadoSuma}`);
                break;
            }
            case 2: {
                const num1 = Number(prompt("Ingrese el primer número: "));
                if (isNaN(num1)) {
                    console.log("Error: Debe ingresar un número válido.");
                    break;
                }
                const num2 = Number(prompt("Ingrese el segundo número: "));
                if (isNaN(num2)) {
                    console.log("Error: Debe ingresar un número válido.");
                    break;
                }
                const resultadoResta = calculo.restar(num1, num2);
                console.log(`El resultado de la resta es: ${resultadoResta}`);
                break;
            }
            case 3: {
                const num1 = Number(prompt("Ingrese el primer número: "));
                if (isNaN(num1)) {
                    console.log("Error: Debe ingresar un número válido.");
                    break;
                }
                const num2 = Number(prompt("Ingrese el segundo número: "));
                if (isNaN(num2)) {
                    console.log("Error: Debe ingresar un número válido.");
                    break;
                }
                const resultadoMultiplicacion = calculo.multiplicar(num1, num2);
                console.log(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);
                break;
            }
            case 4: {
                const num1 = Number(prompt("Ingrese el primer número: "));
                if (isNaN(num1)) {
                    console.log("Error: Debe ingresar un número válido.");
                    break;
                }
                const num2 = Number(prompt("Ingrese el segundo número: "));
                if (isNaN(num2)) {
                    console.log("Error: Debe ingresar un número válido.");
                    break;
                }
                try {
                    const resultadoDivision = calculo.dividir(num1, num2);
                    console.log(`El resultado de la división es: ${resultadoDivision}`);
                }
                catch (err) {
                    console.log('Error:', (_a = err.message) !== null && _a !== void 0 ? _a : err);
                }
                break;
            }
            case 5:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
                break;
        }
    } while (opcion != 5);
}
main();

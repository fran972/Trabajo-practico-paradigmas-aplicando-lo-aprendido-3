"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operaciones = void 0;
class Operaciones {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir entre cero');
        }
        return a / b;
    }
}
exports.Operaciones = Operaciones;

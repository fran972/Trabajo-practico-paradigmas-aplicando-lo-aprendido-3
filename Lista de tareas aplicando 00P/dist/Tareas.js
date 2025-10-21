"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estado = exports.dificultad = void 0;
exports.TareaCostructora = TareaCostructora;
const dificultad = ["Fácil 🌕🌑🌑", "Medio 🌕🌕🌑", "Difícil 🌕🌕🌕"];
exports.dificultad = dificultad;
const estado = ["Pendiente", "En curso", "Terminada", "Cancelada"];
exports.estado = estado;
function TareaCostructora(titulo, descripcion, estadoT, dificultadT, fechaVencimiento) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estadoT;
    this.dificultad = dificultadT;
    this.fechaCreacion = new Date();
    this.fechavencimiento = fechaVencimiento;
    this.fechaultimaEdicion = new Date();
}
TareaCostructora.prototype.VerTarea = function () {
    console.log("----------- Tarea seleccionada -----------\n");
    console.log(`Título: ${this.titulo}`);
    console.log(`Descripción: ${this.descripcion}`);
    console.log(`Estado: ${this.estado}`);
    console.log(`Dificultad: ${this.dificultad}`);
    console.log(`Fecha de creación: ${this.fechaCreacion}`);
    console.log(`Fecha de vencimiento: ${this.fechavencimiento}`);
    console.log(`Última edición: ${this.fechaultimaEdicion}`);
    console.log("------------------------------------------\n");
};
TareaCostructora.prototype.GetTitulo = function () {
    return this.titulo;
};
TareaCostructora.prototype.GetDescripcion = function () {
    return this.descripcion;
};
TareaCostructora.prototype.GetEstado = function () {
    return this.estado;
};
TareaCostructora.prototype.GetDificultad = function () {
    return this.dificultad;
};
TareaCostructora.prototype.GetFechaCreacion = function () {
    return this.fechaCreacion;
};
TareaCostructora.prototype.GetFechaVencimiento = function () {
    return this.fechavencimiento;
};
TareaCostructora.prototype.GetFechaUltimaEdicion = function () {
    return this.fechaultimaEdicion;
};
TareaCostructora.prototype.SetTitulo = function (titulo) {
    this.titulo = titulo;
    this.fechaultimaEdicion = new Date();
    return `Título asignado: ${this.titulo}`;
};
TareaCostructora.prototype.SetDescripcion = function (descripcion) {
    this.descripcion = descripcion;
    this.fechaultimaEdicion = new Date();
    return `Descripción asignada: ${this.descripcion}`;
};
TareaCostructora.prototype.SetEstado = function (estado) {
    this.estado = estado;
    this.fechaultimaEdicion = new Date();
    return `Estado asignado: ${this.estado}`;
};
TareaCostructora.prototype.SetDificultad = function (dificultad) {
    this.dificultad = dificultad;
    this.fechaultimaEdicion = new Date();
    return `Dificultad asignada: ${this.dificultad}`;
};
TareaCostructora.prototype.SetFechaVencimiento = function (dia, mes, año) {
    this.fechavencimiento = new Date(año, mes, dia); // mes -1 porque en Date los meses van de 0 a 11
    this.fechaultimaEdicion = new Date();
    return `Fecha de vencimiento asignada: ${this.fechavencimiento}`;
};
TareaCostructora.prototype.SetFechaEdicion = function () {
    this.fechaultimaEdicion = new Date();
};
TareaCostructora.prototype.SetFechaCreacion = function () {
    this.fechaCreacion = new Date();
};

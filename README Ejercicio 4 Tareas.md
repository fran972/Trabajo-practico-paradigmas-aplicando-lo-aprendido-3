### Ejercicio 4

## 1.Encapsulamiento

El encapsulamiento consiste en agrupar los datos y las operaciones que los manipulan dentro de una misma unidad llamada clase.  
El encapsulamiento se implementó para proteger y controlar el estado interno de la clase Tareas. En lugar de permitir la manipulación directa de las propiedades, se forzó el uso de métodos públicos específicos (Getters y Setters).

```ts
`TareaCostructora.prototype.GetTitulo = function() { return this.titulo; }` 
`TareaCostructora.prototype.SetTitulo = function (titulo) { this.titulo = titulo; this.fechaultimaEdicion = new Date(); return ...; };` 
```

## 2.Abstracción 

La abstracción se utilizó para exponer solo las funcionalidades esenciales de la entidad Tarea, ocultando los detalles complejos de su implementación.

Se definió una interfaz Tareas y un constructor TareaCostructora que exponen métodos claros y concisos (`VerTarea()`, `GetEstado()`, `SetTitulo()`).



## 3.Herencia y Polimorfismo (no utilizados)

Las características de Herencia y Polimorfismo no fueron necesarias debido a la simplicidad del modelo de datos del programa.
La herencia se aplica cuando se tienen clases especializadas que comparten características de una clase base. Dado que la aplicación solo gestiona un único tipo de entidad , no fue necesario crear subclases derivadas  que pudieran heredar de la clase Tarea base.
El polimorfismo clásico (sobreescritura de métodos en clases derivadas) no se implementó.


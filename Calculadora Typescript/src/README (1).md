

### EJERCICIO 4

## 1.Encapsulamiento

El encapsulamiento consiste en agrupar los datos y las operaciones que los manipulan dentro de una misma unidad llamada clase.  
En este caso, se creó la clase Operaciones, que contiene los métodos que definen el comportamiento de la calculadora:

```ts
export class Operaciones {
  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error('No se puede dividir entre cero');
    }
    return a / b;
  }
}
```

## 2.Abstracción

La abstracción se aplica al definir la clase Operaciones de forma que oculta los detalles internos de cómo se realizan los cálculos.  
El programa principal solo necesita saber que existen métodos como sumar() o dividir(), sin conocer su implementación interna:

```ts
const calculo = new Operaciones();
const resultado = calculo.sumar(num1, num2);
```


## 3.Modularidad

La modularidad se logra separando el código en archivos independientes:

- operaciones.ts → contiene la definición de la clase Operaciones.
- main.ts → contiene la lógica del menú e interacción con el usuario.

Este diseño modular permite que la clase Operaciones pueda reutilizarse en otros proyectos o integrarse en una interfaz gráfica o una API sin necesidad de modificar su código.



## 4.Instanciación de objetos

En el programa principal, se crea un objeto de la clase Operaciones para acceder a sus métodos:

```ts
const calculo = new Operaciones();
```

Este objeto representa una instancia concreta de la clase, lo que demuestra cómo la OOP permite crear múltiples objetos con el mismo comportamiento definido en la plantilla de la clase.



## 5.Herencia y Polimorfismo (no utilizados)

En esta implementación no se utilizaron herencia ni polimorfism, ya que la calculadora solo requiere una única clase con operaciones básicas.  
No fue necesario crear jerarquías de clases ni redefinir comportamientos.













# Trabajo-practico-paradigmas-aplicando-lo-aprendido-3

### Ejercicio 1

## 1) 
Este componente se refiere a las leyes, definiciones y estructuras formales que gobiernan el paradigma. En el contexto de JavaScript basado en prototipos, las reglas escritas se centran       en cómo se crean y relacionan los objetos, no a través de clases, sino mediante el encadenamiento de prototipos.

-Fundamento y Reglas Clave:
  Herencia Prototípica :
  Regla: Un objeto hereda propiedades y métodos de otro objeto (su prototipo). Cuando se intenta acceder a una propiedad en un objeto, y esta no existe, el motor de JavaScript sigue la        cadena de prototipos hasta encontrarla o llegar a null.
  
-Función Constructora y Propiedad prototype:
  Regla: Las "clases" se definen tradicionalmente mediante funciones constructoras. Los métodos y propiedades que se desean compartir entre todas las instancias se adjuntan a la propiedad     prototype de la función constructora.

-Creación de Instancias con new:
  Regla: El operador new ejecuta un proceso estandarizado: 1) Crea un nuevo objeto vacío. 2) Establece el prototipo de ese nuevo objeto para que apunte a Constructor.prototype. 3) Ejecuta     la función Constructor con el this apuntando al nuevo objeto. 4) Devuelve el nuevo objeto.


## 2) 
Este componente abarca los valores compartidos y los juicios que hacen los practicantes sobre la elegancia, eficiencia o superioridad de ciertas características del paradigma en comparación con otros .

Características Particulares Valoradas:

-Flexibilidad y Dinamismo (Menos Rígido que las Clases):
   Creencia: La POO prototípica es inherentemente más flexible. Permite la modificación de objetos en tiempo de ejecución de formas que son difíciles o imposibles con los sistemas basados      en   clases. Los desarrolladores valoran la capacidad de añadir, eliminar o modificar propiedades y métodos de cualquier instancia de objeto en cualquier momento.

-Sencillez Conceptual del Objeto:
   Creencia: El modelo prototípico es más simple porque se reduce a un solo concepto: el objeto. En lugar de requerir una jerarquía dual (clases que definen instancias), simplemente se         relacionan objetos con otros objetos.
   Concepto Central: Composición sobre Herencia. Se cree que la herencia prototípica fomenta de forma natural la composición (construir nuevos objetos combinando otros) en lugar de depender    de largas y rígidas jerarquías de herencia de clases.

-Eficiencia en el Uso de Memoria:
   Creencia: Definir métodos en la propiedad prototype de un constructor es superior, ya que solo se almacena una copia de cada método en la memoria, la cual es compartida por todas las        instancias.
   Ventaja: En contraposición a lenguajes donde los métodos pueden ser duplicados para cada instancia (lo cual no siempre ocurre, pero es un punto de contraste común), el modelo prototípico    garantiza que las funciones constructoras son livianas en cuanto a memoria.


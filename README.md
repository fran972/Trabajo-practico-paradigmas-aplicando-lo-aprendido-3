# Trabajo Práctico — Paradigmas: Aplicando lo Aprendido (Tp 3)

## Ejercicio 1

---

### **Fundamentos y Reglas del Paradigma (JavaScript Basado en Prototipos)**

Este componente se refiere a las **leyes, definiciones y estructuras formales** que gobiernan el paradigma.  
En el contexto de **JavaScript basado en prototipos**, las reglas se centran en **cómo se crean y relacionan los objetos**, no mediante clases, sino a través del **encadenamiento de prototipos**.

#### Fundamento y Reglas Clave

**1. Herencia Prototípica**  
- **Regla:** Un objeto hereda propiedades y métodos de otro objeto (su **prototipo**).  
  Cuando se intenta acceder a una propiedad en un objeto y esta no existe, el motor de JavaScript **sigue la cadena de prototipos** hasta encontrarla o llegar a `null`.

---

**2. Función Constructora y Propiedad `prototype`**  
- **Regla:** Las “clases” se definen tradicionalmente mediante **funciones constructoras**.  
  Los métodos y propiedades que se desean compartir entre todas las instancias se adjuntan a la propiedad **`prototype`** de la función constructora.

---

**3. Creación de Instancias con `new`**  
- **Regla:** El operador `new` ejecuta un proceso estandarizado:
  1. Crea un nuevo objeto vacío.  
  2. Establece el prototipo de ese nuevo objeto para que apunte a `Constructor.prototype`.  
  3. Ejecuta la función constructora con `this` apuntando al nuevo objeto.  
  4. Devuelve el nuevo objeto.

---

### **Valores y Creencias del Paradigma**

Este componente abarca los **valores compartidos** y los **juicios** que los practicantes hacen sobre la elegancia, eficiencia o superioridad de ciertas características del paradigma frente a otros.

#### Características Particulares Valoradas

**1. Flexibilidad y Dinamismo (Menos Rígido que las Clases)**  
- **Creencia:** La POO prototípica es inherentemente más flexible.  
  Permite la **modificación de objetos en tiempo de ejecución** de formas que son difíciles o imposibles en sistemas basados en clases.  
  Los desarrolladores valoran la capacidad de **añadir, eliminar o modificar propiedades y métodos** de cualquier instancia en cualquier momento.

---

**2. Sencillez Conceptual del Objeto**  
- **Creencia:** El modelo prototípico es más simple porque se reduce a un solo concepto: **el objeto**.  
  En lugar de requerir una jerarquía dual (clases → instancias), simplemente se **relacionan objetos con otros objetos**.

- **Concepto Central:** *Composición sobre Herencia.*  
  Se cree que la herencia prototípica fomenta de forma natural la **composición** (construir nuevos objetos combinando otros), en lugar de depender de **jerarquías rígidas** de herencia.

---

**3. Eficiencia en el Uso de Memoria**  
- **Creencia:** Definir métodos en la propiedad `prototype` de un constructor es superior, ya que **solo se almacena una copia** de cada método en memoria, compartida por todas las instancias.  
- **Ventaja:** En contraste con algunos lenguajes donde los métodos pueden duplicarse para cada instancia, el modelo prototípico garantiza que las **funciones constructoras sean livianas** en cuanto a memoria.

---

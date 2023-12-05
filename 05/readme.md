# CyberTruck de Papá Noel

**Nivel:** **_Medio_**

## Instrucciones

Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer , en una carretera del Polo Norte. El camino está representado por una cadena de caracteres, donde:

- **.= Camino**
- **S= Trineo de Papá Noel**
- **\*= Barrera abierta**
- **\|= Barrera cerrada**

Ejemplo de una carretera:S...|....|.....

Cada unidad de tiempo, **el trineo se mueve una posición hacia la derecha**. Si encuentra una barrera cerrada, se detiene hasta que se abre la barrera. Si está abierto pasa directamente.

**Todas las barreras comienzan cerradas** , pero después de 5 unidades de tiempo, todas se abren para siempre .

**Cree una función que simule el movimiento del trineo** durante un tiempo determinado y **devuelva una matriz** de cadenas que representen el estado de la carretera en cada unidad de tiempo:

```js
const road = "S..|...|..";
const time = 10; // units of time
const result = cyberReindeer(road, time);

/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/
```

El resultado es un **arreglo donde cada elemento muestra el camino en cada unidad de tiempo**.

Tenga en cuenta que **si el trineo está en la misma posición que una barrera**, entonces ocupa su lugar en el conjunto.

Los elfos se **inspiraron en este desafío de Code Wars**.

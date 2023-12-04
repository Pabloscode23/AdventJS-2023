# Dale vuelta a los paréntesis

**Nivel:** **_Fácil_**

## Instrucciones

En 🎅 El taller de Papá Noel, **algunos mensajes navideños se han escrito de una manera peculiar** : las palabras entre paréntesis deben leerse al revés.

**Santa necesita que estos mensajes tengan el formato correcto.** Tu tarea es escribir una función que tome una cadena e invierta los caracteres dentro de cada par de paréntesis, eliminando también los paréntesis.

Sin embargo, tenga en cuenta que puede haber paréntesis anidados, por lo que deberá invertir los caracteres en el orden correcto.

## Ejemplos

```js
const a = decode("hola (odnum)");
console.log(a); // hola mundo
```

```js
const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!
```

```js
const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
```

## A tener en cuenta:

- **Las cadenas de entrada siempre estarán bien formadas con paréntesis que coincidan correctamente, no es necesario validarlos.**
- **No debe quedar ningún paréntesis en el mensaje final.**
- **El nivel máximo de anidación es 2.**

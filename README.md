#🎮 Tic Tac Toe with React

Implementación del clásico juego **Tres en Raya (Tic Tac Toe)** desarrollada con **React.js** y **Vite** como proyecto de práctica para aprender los fundamentos del desarrollo de interfaces interactivas.

El proyecto permite jugar partidas entre dos jugadores, detectar automáticamente victorias y empates, y conservar el estado de la partida mediante `localStorage`.

---

##📋 Características

* **Dos jugadores:** partidas entre los símbolos `O` y `X`.
* **Gestión de turnos:** alternancia automática entre jugadores.
* **Detección de ganador:** identificación de combinaciones ganadoras.
* **Detección de empate:** finalización de la partida cuando el tablero está completo sin un ganador.
* **Persistencia de datos:** almacenamiento del estado de la partida mediante `localStorage`.
* **Reinicio de partida:** posibilidad de comenzar una nueva partida.
* **Modal de resultado:** visualización del resultado al finalizar la partida.
* **Animación de confeti:** efecto visual al finalizar una partida ganada.

---

##🛠️ Tecnologías utilizadas

* **React.js:** desarrollo de interfaces mediante componentes.
* **JavaScript:** implementación de la lógica del juego.
* **Vite:** entorno de desarrollo y herramienta de construcción.
* **HTML5:** estructura de la aplicación.
* **CSS3:** estilos de la interfaz.
* **Web Storage API (`localStorage`):** persistencia del estado de la partida.

---

##⚙️ Requisitos previos

Antes de ejecutar el proyecto, necesitás tener instalado:

* [Node.js](https://nodejs.org/)
* npm, incluido con Node.js.
* Git, para clonar el repositorio.

---

##🚀 Instalación y ejecución

**1. Clonar el repositorio**

```bash
git clone https://github.com/Fede-Code-007/tictactoe-with-react.git
```

**2. Ingresar al directorio del proyecto**

```bash
cd tictactoe-with-react
```

**3. Instalar las dependencias**

```bash
npm install
```

**4. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

**5. Abrir la aplicación**

Accedé a la dirección local que muestra Vite en la terminal. Por defecto, suele ser:

```text
http://localhost:5173
```

---

##📝 Cómo jugar

1. El jugador `O` comienza la partida.
2. Los jugadores se alternan seleccionando una casilla vacía.
3. El primer jugador que consigue tres símbolos consecutivos en una fila, columna o diagonal gana.
4. Si se ocupan las nueve casillas sin una combinación ganadora, la partida termina en empate.
5. El resultado se muestra al finalizar la partida.
6. El estado de la partida se guarda en el navegador y se recupera al recargar la página.
7. Utilizá el botón de reinicio para comenzar una nueva partida.

---

##📁 Estructura del proyecto

```text
src/
├── components/
│   ├── Board.jsx
│   ├── Square.jsx
│   ├── Turns.jsx
│   └── WinnerModal.jsx
│
├── hooks/
│   └── useGame.js
│
├── logic/
│   └── board.js
│
├── constants.js
├── App.jsx
├── App.css
└── main.jsx
```
---

##📚 Organización y responsabilidades

### Componentes

| Archivo           | Responsabilidad                                                     |
| ----------------- | ------------------------------------------------------------------- |
| `App.jsx`         | Componente principal que integra la interfaz y la lógica del juego. |
| `Board.jsx`       | Renderiza el tablero de nueve casillas.                             |
| `Square.jsx`      | Representa cada casilla y gestiona la interacción del usuario.      |
| `Turns.jsx`       | Indica qué jugador tiene el turno actual.                           |
| `WinnerModal.jsx` | Presenta el resultado de la partida y permite iniciar otra.         |

### Hook personalizado

**`hooks/useGame.js`**

Centraliza el estado y las operaciones principales de la partida:

* Gestión del tablero y del turno actual.
* Registro de las jugadas.
* Determinación del ganador y del fin de la partida.
* Reinicio del juego.
* Persistencia del estado mediante `localStorage`.
* Ejecución de la animación de confeti.

### Lógica del juego

**`logic/board.js`**

Contiene funciones independientes de la interfaz para evaluar las reglas del juego:

* `checkWinner()`: comprueba si existe una combinación ganadora.
* `checkEndGame()`: determina si la partida terminó en empate.

Esta separación permite mantener las reglas del juego fuera de los componentes visuales y facilita su mantenimiento.

### Constantes

**`constants.js`**

Centraliza los valores constantes utilizados por la aplicación, evitando repetir definiciones en distintos archivos.

---

##💾 Persistencia de datos

El proyecto utiliza `localStorage`, una API del navegador que permite almacenar información de manera persistente entre recargas de la página.

Se guarda el estado necesario para recuperar la partida, incluyendo:

* El contenido del tablero.
* El turno actual.
* El resultado de la partida, cuando corresponde.

La información permanece almacenada en el navegador hasta que se sobrescribe o se elimina. No se utiliza una base de datos ni un servidor para guardar las partidas.

---

##🎯 Objetivos de aprendizaje

Este proyecto se desarrolló para practicar conceptos fundamentales de React y mejorar la comprensión de cómo se construyen aplicaciones web interactivas.

Los principales conceptos trabajados son:

* **Componentes funcionales:** división de la interfaz en unidades reutilizables.
* **Props:** comunicación de información entre componentes.
* **`useState`:** gestión del estado de la aplicación.
* **Hooks personalizados:** encapsulación y reutilización de lógica.
* **Eventos:** respuesta a las interacciones del usuario.
* **Renderizado de listas:** generación dinámica de las casillas del tablero.
* **Estado compartido:** coordinación de información entre distintos componentes.
* **Separación de responsabilidades:** organización de la interfaz, el estado y las reglas del juego.
* **`localStorage`:** persistencia de información en el navegador.
* **Renderizado condicional:** visualización de estados y resultados según el desarrollo de la partida.

---

##🔮 Posibles mejoras

Algunas funcionalidades que podrían incorporarse en futuras versiones son:

* Contador de victorias, derrotas y empates.
* Selección de nombres para los jugadores.
* Modo de juego contra la computadora.
* Selector de tema claro y oscuro.
* Mejoras de accesibilidad y diseño responsive.
* Pruebas automatizadas para los componentes y las reglas del juego.

  

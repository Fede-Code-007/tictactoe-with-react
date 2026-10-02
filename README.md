# 🎮 Tic Tac Toe

Versión del clásico juego de **Tres en Raya (Tic Tac Toe)** desarrollado con **React** como proyecto de práctica para trabajar con componentes, estado, hooks y persistencia de datos.

## ✨ Características

* 🎯 Juego para dos jugadores: **O vs X**
* 🔄 Cambio automático de turno
* 🏆 Detección de ganador
* 🤝 Detección de empate
* 💾 Persistencia de la partida utilizando `localStorage`

## 🛠️ Tecnologías

* **React**
* **JavaScript**
* **Vite**
* **CSS**
* **HTML**
* **LocalStorage**

## 📂 Estructura principal del proyecto

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

### Componentes principales

#### `App.jsx`

Es el componente principal de la aplicación. Se encarga de combinar los diferentes componentes y conectar la interfaz con `useGame`.

#### `Board.jsx`

Renderiza el tablero y sus nueve casillas.

#### `Square.jsx`

Representa cada casilla del tablero y controla su interacción.

#### `Turns.jsx`

Muestra el jugador cuyo turno está activo.

#### `WinnerModal.jsx`

Muestra el resultado de la partida y permite iniciar una nueva.

### Hook personalizado

#### `useGame.js`

Centraliza la lógica principal de la partida:

* Estado del tablero.
* Turno actual.
* Ganador.
* Actualización de las jugadas.
* Reinicio de la partida.
* Persistencia mediante `localStorage`.
* Animación de confeti.

### Lógica del juego

#### `logic/board.js`

Contiene las funciones encargadas de comprobar las reglas del juego:

* `checkWinner()`
* `checkEndGame()`

Estas funciones están separadas de los componentes de React para mantener la lógica del juego independiente de la interfaz.

## 🚀 Instalación

Cloná el repositorio:

```bash
git clone https://github.com/Fede-Code-007/tictactoe-with-react.git
```

Entrá en la carpeta:

```bash
cd tictactoe-with-react
```

Instalá las dependencias:

```bash
npm install
```

Iniciá el servidor de desarrollo:

```bash
npm run dev
```

Luego abrí en el navegador la dirección indicada por Vite, normalmente:

```text
http://localhost:5173
```

## 🎮 Cómo jugar

1. El jugador **O** comienza la partida.
2. Los jugadores se alternan colocando su símbolo.
3. El primero en conseguir tres símbolos consecutivos gana.
4. Si se llenan las nueve casillas sin ganador, la partida termina en empate.
5. La partida se guarda automáticamente en el navegador.
6. Al recargar la página, el estado de la partida se recupera.
7. El botón de reinicio permite comenzar una nueva partida.

## 💾 Persistencia

El juego utiliza `localStorage` para guardar:

* El estado del tablero.
* El turno actual.
* El resultado de la partida.

Esto permite que una partida continúe después de cerrar o recargar la página.

## 📚 Objetivos del proyecto

Este proyecto fue realizado para practicar conceptos fundamentales de React:

* Componentes.
* Props.
* `useState`.
* Custom Hooks.
* Renderizado de listas.
* Eventos.
* Estado compartido entre componentes.
* Separación de responsabilidades.
* Persistencia con `localStorage`.

## 📌 Próximos pasos...

Entre las funcionalidades que podrían incorporarse al proyecto en versiones futuras se encuentran:

* Contador de victorias para cada jugador.
* Selector de nombre para los jugadores.
* Modo contra la computadora.
* Modo oscuro/claro.
* Diseño responsive mejorado.


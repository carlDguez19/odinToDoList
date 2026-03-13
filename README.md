# To‑Do List App

A modular, Webpack‑bundled task management application built with JavaScript. This project focuses on clean architecture, dynamic DOM rendering, and persistent data storage using localStorage.

## Features
- Create, edit, and delete projects
- Add tasks with descriptions, due dates, and priority
- Edit or remove tasks at any time
- Persistent storage using localStorage
- Modular JavaScript architecture
- Dynamic DOM rendering
- Responsive layout

## Tech Stack
- JavaScript (ES6 Modules)
- Webpack
- HTML5 / CSS3
- localStorage API

## Project Structure

```txt
ODINTODOLIST
├── dist
│   ├── index.html
│   ├── main.css
│   ├── bundle.js
│   ├── 177a54134d0bd5aefd06.png
│   ├── 986e98635b18601755cf.png
│   ├── abbfad808c278a6a2d4d.png
│   ├── c9c7160b568bb10d504c.png
│   └── edb755c23d1ebfc9c7a4.png
│
├── src
│   ├── imgs
│   │   ├── add.png
│   │   ├── close.png
│   │   ├── edit.png
│   │   ├── menu.png
│   │   ├── remove.png
│   │   └── WorkerAntsMod.png
│   │
│   ├── index.js
│   ├── infoDescListeners.js
│   ├── menuEventListeners.js
│   ├── projectClass.js
│   ├── projectDOM.js
│   ├── projectEventListeners.js
│   ├── projectForm.js
│   ├── taskClass.js
│   ├── taskDOM.js
│   ├── taskEventListeners.js
│   └── taskForm.js
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── webpack.config.js


```


## How to Run Locally
1. Clone the repo  
2. Install dependencies: `npm install`  
3. Build the project: `npm run build`  
4. Open `dist/index.html` in your browser

# App Notifier

Una aplicación de notificación cliente construida con Electron.js.

## Descripción

Esta aplicación crea una ventana de escritorio que se conecta a un servidor local para mostrar notificaciones. Utiliza Electron.js para proporcionar una interfaz nativa multiplataforma.

## Características

- Ventana de aplicación de 800x600 píxeles
- BrowserView integrado para contenido web
- Conexión a servidor local (http://localhost)
- Soporte para builds de Windows con instalador NSIS

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/koki198977/app-notifier.git
cd app-notifier

# Instalar dependencias
npm install
# o
yarn install
```

## Uso

```bash
# Ejecutar en modo desarrollo
npm start
# o
yarn start

# Ejecutar en modo desarrollo con flags adicionales
npm run dev
# o
yarn dev

# Crear build para distribución
npm run build
# o
yarn build
```

## Tecnologías

- [Electron.js](https://electronjs.org/) - Framework para aplicaciones de escritorio
- [electron-builder](https://www.electron.build/) - Herramienta para crear instaladores

## Licencia

ISC
# App Notifier

Una aplicación de notificación cliente construida con Electron.js que se conecta a un servidor Laravel local via XAMPP.

## Descripción

Esta aplicación crea una ventana de escritorio que se conecta a un servidor Laravel local corriendo en XAMPP (puerto 80) para mostrar notificaciones. Utiliza Electron.js para proporcionar una interfaz nativa multiplataforma.

## Requisitos del sistema

- **Para usuarios finales**: Solo el archivo .exe (no requiere Node.js)
- **Para el servidor**: XAMPP con Laravel configurado
- **Puerto requerido**: XAMPP corriendo en puerto 80 (configuración estándar)

## Configuración del servidor

La aplicación se conecta automáticamente a XAMPP corriendo en puerto 80:

1. **Iniciar XAMPP**
2. **Ejecutar la aplicación Electron**
3. La aplicación se conectará automáticamente a `http://localhost`

## Características

- Ventana de aplicación de 800x600 píxeles
- BrowserView integrado para contenido web
- Conexión automática a XAMPP (http://localhost)
- Soporte para builds de Windows con instalador NSIS
- Interfaz nativa sin necesidad de navegador web
- Funciona con XAMPP sin configuración adicional

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

### Desarrollo (modificar código)
```bash
# Ejecutar en modo desarrollo
npm start
# o
yarn start

# Ejecutar en modo desarrollo con flags adicionales
npm run dev
# o
yarn dev
```

### Distribución (crear ejecutable)
```bash
# Crear build para distribución
npm run build
# o
yarn build
```

El comando `build` genera:
- `dist/app-notifier Setup 1.0.0.exe` - Instalador para Windows
- `dist/win-unpacked/` - Aplicación descomprimida (portable)

### Para usuarios finales
Los usuarios finales solo necesitan ejecutar el archivo `.exe` generado. No requieren Node.js ni dependencias adicionales.

**IMPORTANTE**: Asegúrate de que XAMPP esté corriendo antes de abrir la aplicación.

## Instrucciones para usuarios finales

1. **Iniciar XAMPP**:
   - Abrir XAMPP Control Panel
   - Iniciar Apache (puerto 80)
   - Verificar que el proyecto Laravel esté en htdocs
   
2. **Ejecutar la aplicación**:
   - Doble clic en el archivo `.exe` del instalador
   - La aplicación se conectará automáticamente a localhost

3. **Uso normal**:
   - Solo mantén XAMPP corriendo
   - La aplicación Electron mostrará el contenido automáticamente
   - No necesitas terminal ni comandos adicionales

## Flujo recomendado

### En PC de desarrollo:
1. `git clone` del repositorio
2. `yarn install` para instalar dependencias
3. `yarn start` para desarrollo
4. `yarn build` cuando quieras crear el ejecutable

### En PC de usuario final:
1. Ejecutar el archivo `.exe` del instalador
2. La aplicación se instala automáticamente

## Tecnologías

- [Electron.js](https://electronjs.org/) - Framework para aplicaciones de escritorio
- [electron-builder](https://www.electron.build/) - Herramienta para crear instaladores

## Licencia

ISC
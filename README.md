# 🍽️ Restaurante Zaguán - Frontend

Una aplicación web moderna para el restaurante Zaguán, ubicado en Yumbo, Valle del Cauca. Desarrollada con React y Vite, presenta la gastronomía colombiana con un diseño elegante y responsive.

![Zaguán Restaurant](src/images/Logo-Full-Color-PNG.png)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Páginas](#-páginas)
- [Metodología CSS](#-metodología-css)
- [Responsive Design](#-responsive-design)
- [Scripts Disponibles](#-scripts-disponibles)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante y profesional
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento**: Construido con Vite para carga rápida
- 🧭 **Navegación**: React Router para SPA fluida
- 🎯 **BEM CSS**: Metodología CSS escalable y mantenible
- 📄 **Menú Digital**: Visualización y descarga de menú PDF
- 🌐 **API Integration**: Plato del día dinámico desde MockAPI
- 📍 **Geolocalización**: Integración con Google Maps

## 🛠️ Tecnologías

### Frontend
- **React** 19.2.0 - Biblioteca de interfaz de usuario
- **React Router DOM** 7.12.0 - Enrutamiento del lado del cliente
- **Vite** 7.2.4 - Herramienta de construcción y desarrollo

### Desarrollo
- **ESLint** - Linting de código
- **CSS3** - Estilos con metodología BEM
- **JavaScript ES6+** - Sintaxis moderna

### APIs Externas
- **MockAPI** - Datos del plato del día
- **Google Maps** - Integración de mapas
- **Google Reviews** - Integración de reseñas de Google


## 🚀 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/zaguan-frontend.git
   cd zaguan-frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 💻 Uso

### Desarrollo
```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Vista previa de la construcción
npm run lint         # Ejecuta ESLint
```

### Producción
```bash
npm run build        # Genera archivos optimizados en /dist
```

## 📁 Estructura del Proyecto

```
zaguan-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── BD.json              # Base de datos local
│   │   └── files/
│   │       └── Menu-Zaguan.pdf  # Menú del restaurante
│   ├── blocks/                  # Estilos CSS por componente
│   │   ├── aboutPage.css
│   │   ├── servicesPage.css
│   │   ├── menuPage.css
│   │   ├── homePage.css
│   │   ├── notFoundPage.css
│   │   ├── header.css
│   │   ├── footer.css
│   │   └── variables.css        # Variables CSS globales
│   ├── components/
│   │   ├── layout/              # Componentes de layout
│   │   └── sections/            # Secciones reutilizables
│   │       ├── Contact.jsx
│   │       ├── HeroSection.jsx
│   │       ├── History.jsx
│   │       ├── MapGoogle.jsx
│   │       ├── Menu.jsx
│   │       └── Review.jsx
│   ├── images/                  # Recursos gráficos
│   ├── pages/                   # Páginas principales
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── MenuPage.jsx
│   │   ├── ServicesPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── package.json
├── vite.config.js
└── README.md
```

## 📄 Páginas

### 🏠 **HomePage** (`/`)
- Hero section con imagen de fondo
- Historia del restaurante
- Menú destacado
- Información de contacto

### ℹ️ **AboutPage** (`/about`)
- Historia detallada del restaurante
- Timeline de eventos importantes
- Perfil de la Chef Fanery Collazos
- Estadísticas del restaurante

### 🍽️ **MenuPage** (`/menu`)
- Plato del día (API dinámica)
- Preview del menú PDF
- Descarga del menú completo
- Información nutricional

### 🎉 **ServicesPage** (`/services`)
- Servicios de catering
- Eventos privados
- Menú empresarial
- Formulario de cotización

### ❌ **NotFoundPage** (`/404`)
- Página de error 404
- Navegación de regreso al inicio

## 🎨 Metodología CSS

### BEM (Block Element Modifier)
El proyecto utiliza la metodología BEM para CSS, proporcionando:

- **Consistencia**: Nomenclatura uniforme
- **Escalabilidad**: Fácil mantenimiento
- **Modularidad**: Componentes independientes

#### Ejemplo de Estructura BEM:
```css
/* Block */
.menu-page { }

/* Element */
.menu-page__header { }
.menu-page__content { }

/* Modifier */
.menu-page__button--primary { }
```

### Variables CSS
```css
/* src/blocks/variables.css */
:root {
  --primary-color-terracota: #d95a3f;
  --font-family: 'Arial', sans-serif;
  --font-size-xl: 2rem;
  /* ... más variables */
}
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: ≤ 768px
- **Mobile Large**: ≤ 480px
- **Mobile Small**: ≤ 360px

### Características Responsive
- Grid layouts adaptativos
- Tipografía escalable
- Imágenes optimizadas
- Navegación móvil
- Touch-friendly buttons

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en puerto 3000 |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Vista previa de la construcción local |
| `npm run lint` | Ejecuta ESLint para verificar código |

## 🔧 Configuración

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  }
})
```

### ESLint Configuration
El proyecto incluye configuración ESLint para:
- React Hooks
- React Refresh
- Estándares de JavaScript moderno

## 🌐 APIs Utilizadas

### MockAPI - Plato del Día
```javascript
// Endpoint para obtener plato del día
const API_URL = 'https://6973955db5f46f8b5827bd5e.mockapi.io/menu'
```

### Google Maps
- Integración para mostrar ubicación del restaurante
- Componente `MapGoogle.jsx`

### Google Reviews
- Integración para mostrar las reseñas de los usuarios de Google del restaurante
- Componente `Review.jsx`

## 🎯 Características Técnicas

### Performance
- **Lazy Loading**: Carga diferida de componentes
- **Code Splitting**: División automática de código
- **Asset Optimization**: Optimización de imágenes y recursos

### SEO
- Meta tags apropiados
- Estructura semántica HTML5
- URLs amigables con React Router

### Accesibilidad
- Alt text en imágenes
- Navegación por teclado
- Contraste de colores apropiado
- Etiquetas ARIA cuando es necesario

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- Seguir metodología BEM para CSS
- Usar ESLint para mantener calidad de código
- Componentes funcionales con Hooks
- Nombres descriptivos para variables y funciones

## 📞 Contacto

**Restaurante Zaguán**
- 📍 Yumbo, Valle del Cauca, Colombia
- 📧 info@restaurantezaguan.com
- 📱 WhatsApp: +57 316 291 1068

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Restaurante Zaguán**
**Realizado por: Johan Manuel Echeverry**

*Donde la Tradición se Encuentra con la Innovación*
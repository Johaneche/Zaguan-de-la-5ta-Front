# 📁 Estructura del Proyecto - Zaguán de la Quinta

## Organización de Carpetas

```
src/
├── components/
│   ├── layout/              # Componentes de estructura (Header, Footer)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── index.js         # Exportaciones centralizadas
│   │
│   └── sections/            # Secciones reutilizables de contenido
│       ├── HeroSection.jsx
│       ├── History.jsx
│       ├── Menu.jsx
│       ├── Contact.jsx
│       ├── MapGoogle.jsx
│       ├── Review.jsx
│       └── index.js         # Exportaciones centralizadas
│
├── pages/                   # Páginas completas (rutas)
│   ├── HomePage.jsx         # Página principal (/)
│   ├── MenuPage.jsx         # Página del menú (/menu)
│   ├── AboutPage.jsx        # Quienes somos (/quienes-somos)
│   ├── ServicesPage.jsx     # Servicios (/servicios)
│   └── index.js             # Exportaciones centralizadas
│
├── blocks/                  # Estilos CSS por componente
│   ├── variables.css
│   ├── header.css
│   ├── footer.css
│   ├── heroSection.css
│   ├── history.css
│   ├── menu.css
│   ├── contact.css
│   └── pages.css
│
├── images/                  # Recursos de imágenes
├── vendor/                  # Librerías de terceros
├── App.jsx                  # Componente raíz con Router
├── main.jsx                 # Punto de entrada
└── index.css                # Estilos globales
```

## Convenciones

### 📦 Componentes (`components/`)
Piezas reutilizables de UI organizadas por función:

- **`layout/`**: Componentes estructurales que aparecen en todas las páginas
  - Header, Footer, Sidebar, etc.

- **`sections/`**: Secciones de contenido reutilizables
  - HeroSection, History, Menu, Contact, etc.

### 📄 Páginas (`pages/`)
Vistas completas que corresponden a rutas específicas:
- Cada página representa una URL
- Componen secciones y componentes
- Se cargan mediante React Router

### 🎨 Estilos (`blocks/`)
Archivos CSS organizados por componente:
- Un archivo CSS por componente principal
- `variables.css` para tokens de diseño
- Importados centralmente en `index.css`

## Importaciones Limpias

Gracias a los archivos `index.js`, las importaciones son más limpias:

### ❌ Antes:
```javascript
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import History from './components/sections/History.jsx'
```

### ✅ Ahora:
```javascript
import { Header, Footer } from './components/layout'
import { HeroSection, History } from './components/sections'
```

## Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | HomePage | Página principal con todas las secciones |
| `/menu` | MenuPage | Página del menú (en construcción) |
| `/quienes-somos` | AboutPage | Información del restaurante (en construcción) |
| `/servicios` | ServicesPage | Servicios ofrecidos (en construcción) |

## Navegación

- **Header**: Presente en todas las páginas
- **Footer**: Presente en todas las páginas
- **Contacto**: Scroll suave a la sección desde cualquier página

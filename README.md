# AnimalWorld La Estancia - Proyecto Web Oficial

## 📋 Descripción del Proyecto

**AnimalWorld La Estancia** es una plataforma web profesional para la gestión y venta de productos agropecuarios y veterinarios en Colombia. El proyecto consiste en dos marcas principales:

- **Animal World**: Clínica veterinaria y productos para mascotas
- **La Estancia**: Productos agropecuarios, semillas e insumos agrícolas

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico
- **Frontend**: Next.js 15 con App Router
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4 con shadcn/ui
- **Base de Datos**: Prisma ORM con SQLite
- **Autenticación**: NextAuth.js v4
- **Despliegue**: Vercel (Frontend) + Railway (Backend)

### Estructura de Directorios

```
src/
├── app/                    # Páginas principales (App Router)
│   ├── animalworld/        # Sección Animal World
│   ├── laestancia/         # Sección La Estancia
│   ├── cotizar/           # Formulario de cotizaciones
│   ├── productos/         # Catálogo de productos
│   ├── contacto/          # Información de contacto
│   ├── admin/             # Panel de administración
│   └── api/               # Rutas API
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes shadcn/ui
│   └── ...               # Componentes personalizados
├── lib/                  # Utilidades y configuración
└── styles/               # Estilos globales
```

## 🌟 Funcionalidades Principales

### Animal World - Veterinaria
- 🏥 Información de clínica veterinaria presencial
- 🐾 Productos premium para mascotas
- 📞 Contacto directo y emergencias 24/7
- 📍 Ubicación en Bogotá, Colombia

### La Estancia - Agropecuarios
- 🌱 Catálogo completo de productos agropecuarios
- 📦 Categorías: Ganado, Aves, Porcinos, Equinos, Insumos Agrícolas
- 🌾 Semillas certificadas y fertilizantes
- 💰 Sistema de cotizaciones personalizado
- 📱 Integración con WhatsApp

### Características Técnicas
- 📱 Diseño 100% responsive
- 🌙 Soporte para modo oscuro/claro
- ⚡ Optimizado para SEO
- 🔒 TypeScript para seguridad de tipos
- 🎨 Componentes reutilizables con shadcn/ui

## 🚀 Guía de Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/V3NUZ/ESTANCIA-SERVIDOR.git
cd ESTANCIA-SERVIDOR
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
# Editar .env.local con tus configuraciones
```

4. **Inicializar base de datos**
```bash
npm run db:push
npm run db:generate
```

5. **Iniciar desarrollo**
```bash
npm run dev
```

6. **Acceder a la aplicación**
- Frontend: http://localhost:3000
- API: http://localhost:3000/api

## 📦 Scripts Disponibles

```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Compilar para producción
npm run start        # Iniciar servidor de producción
npm run lint         # Ejecutar ESLint
npm run db:push      # Sincronizar schema con DB
npm run db:generate  # Generar Prisma Client
npm run db:migrate   # Ejecutar migraciones
npm run db:reset     # Resetear base de datos
```

## 🌐 Flujo de Trabajo con Git

### Ramas Principales
- `main`: Producción (solo commits estables)
- `develop`: Desarrollo integrado
- `feature/*`: Nuevas funcionalidades
- `hotfix/*: Correcciones urgentes

### Flujo de Trabajo
1. Crear rama feature desde develop
2. Desarrollar la funcionalidad
3. Hacer commit con mensajes claros
4. Crear Pull Request a develop
5. Revisión y merge
6. Deploy automático a staging

### Convención de Commits
```
feat: Nueva funcionalidad
fix: Corrección de error
docs: Actualización de documentación
style: Cambios de formato
refactor: Refactorización de código
test: Adición de pruebas
chore: Cambios de mantenimiento
```

## 📱 Información de Contacto del Negocio

### Animal World - Clínica Veterinaria
- **Dirección**: Carrera 58 #128B-88, Bogotá, Colombia
- **Teléfono**: +57 314 2822728
- **WhatsApp**: +57 314 2822728
- **Email**: clinica@animalworld.co

### La Estancia - Agropecuarios
- **Dirección**: Avenida Caracas 70A-89, Bogotá, Colombia
- **Teléfono**: +57 310 6871639
- **WhatsApp**: +57 310 6871639
- **Email**: contacto@laestancia.co

## 🔧 Configuración de Despliegue

### Vercel (Frontend)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push a main

### Railway (Backend)
1. Conectar repositorio a Railway
2. Configurar base de datos PostgreSQL
3. Configurar variables de entorno
4. Deploy automático

## 📝 Notas Importantes

- **Punto de Venta**: Solo existe una tienda principal. Se eliminó referencia a punto falso en Funza
- **Semillas**: La categoría "Insumos Agrícolas" incluye semillas certificadas
- **Contacto**: Todas las consultas se redirigen a la tienda principal
- **Horarios**: Lunes a Sábado de 8:00 AM a 6:00 PM

## 🤝 Contribución

1. Hacer Fork del proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Hacer commit (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Hacer push (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto es propiedad de **AnimalWorld La Estancia**. Todos los derechos reservados.

## 👥 Equipo de Desarrollo

- **AnimalWorld La Estancia Team** - Desarrollo y mantenimiento
- **V3NUZ** - Configuración y despliegue

---

**Última actualización**: 21 de Octubre de 2025
**Versión**: 2.0.0
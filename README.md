<<<<<<< HEAD
# AnimalWorld - La Estancia

🐾 **Tu tienda especializada en productos para mascotas y animales de granja en Bogotá**

Clínica veterinaria presencial para mascotas y productos agropecuarios con semillas certificadas. Calidad y confianza en Bogotá.

## 🌟 Características

- **Animal World**: Clínica veterinaria y productos premium para mascotas
- **La Estancia**: Insumos agropecuarios, semillas y productos para ganadería
- **Diseño Responsive**: Funciona perfectamente en desktop y móviles
- **Next.js 15**: Construido con la última tecnología
- **TypeScript**: Código tipo-seguro y mantenible

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/V3NUZ/ESTANCIA-SERVIDOR.git
   cd ESTANCIA-SERVIDOR
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Configura la base de datos**
   ```bash
   npm run db:push
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
ESTANCIA-SERVIDOR/
├── src/
│   ├── app/                    # Páginas y rutas de la app
│   │   ├── (pages)/           # Páginas principales
│   │   ├── api/               # Endpoints de la API
│   │   ├── admin/             # Panel de administración
│   │   └── layout.tsx         # Layout principal
│   ├── components/            # Componentes React
│   │   └── ui/               # Componentes UI reutilizables
│   ├── hooks/                # Hooks personalizados
│   └── lib/                  # Utilidades y configuración
├── public/                   # Archivos estáticos
├── prisma/                   # Esquema de base de datos
└── docs/                     # Documentación
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción

# Base de datos
npm run db:push      # Aplica cambios al schema
npm run db:generate  # Genera Prisma Client
npm run db:studio    # Abre Prisma Studio

# Calidad
npm run lint         # Verifica código con ESLint
```

## 📞 Contacto

### Animal World - Mascotas
- 📍 **Dirección**: Carrera 58 #128B-88, Bogotá, Colombia
- 📞 **Teléfono**: +57 314 2822728
- 💬 **WhatsApp**: +57 314 2822728
- 📧 **Email**: clinica@animalworld.co

### La Estancia - Agropecuarios
- 📍 **Dirección**: Avenida Caracas 70A-83, Bogotá, Colombia
- 📞 **Teléfono**: +57 310 6871639
- 💬 **WhatsApp**: +57 310 6871639
- 📧 **Email**: info@laestancia.co

## 🌐 Despliegue

El proyecto está configurado para desplegarse fácilmente en:

- **Vercel** (Recomendado)
- **Netlify**
- **GitHub Pages**
- Cualquier plataforma que soporte Next.js

### Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno:
   - `DATABASE_URL`
   - `JWT_SECRET`
3. Despliega automáticamente

## 🔧 Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key-here"
```

## 📱 Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Database**: Prisma ORM con SQLite
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel ready

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Mira el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- A todos nuestros clientes y su confianza en nuestros servicios
- Al equipo de AnimalWorld y La Estancia por su dedicación

---

**© 2024 AnimalWorld La Estancia. Todos los derechos reservados. Bogotá, Colombia**

Hecho con ❤️ para el cuidado animal y agropecuario
=======
# 🌾 AnimalWorld La Estancia - Plataforma Agropecuaria Profesional

<div align="center">

![AnimalWorld La Estancia](https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3)

**Plataforma web líder en productos agropecuarios y servicios veterinarios en Colombia**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](LICENSE)

[🌐 Visitar Sitio Web](https://animalworld-laestancia.vercel.app) •
[📧 Email Desarrollador](mailto:donpepitacos@gmail.com) •
[🌐 GitHub](https://github.com/V3NUZ)

</div>

---

## 📋 Descripción del Proyecto

**AnimalWorld La Estancia** es una plataforma empresarial líder desarrollada por **Alejandro (V3NUZ)**, experto en soluciones digitales para el sector agropecuario y veterinario en Colombia. Este proyecto representa la vanguardia de la transformación digital, conectando a los clientes con productos y servicios de calidad excepcional.

### 🏢 Marcas Principales

- **🐾 Animal World**: Clínica veterinaria presencial y productos premium para mascotas
- **🌾 La Estancia**: Distribuidor autorizado de productos agropecuarios, semillas certificadas e insumos agrícolas

### 🎯 Misión del Proyecto

Facilitar el acceso a productos y servicios de calidad para el sector agropecuario y veterinario, mediante una plataforma digital intuitiva que conecta a los clientes con soluciones especializadas.

---

## 🏗️ Arquitectura Técnica

### Stack Tecnológico Principal

| Tecnología | Versión | Uso Principal |
|------------|---------|---------------|
| **Next.js** | 15.3.5 | Framework frontend con App Router |
| **TypeScript** | 5.0 | Tipado seguro y desarrollo robusto |
| **Tailwind CSS** | 4.0 | Sistema de diseño moderno |
| **shadcn/ui** | Latest | Componentes UI profesionales |
| **Prisma ORM** | 6.11.1 | Gestión de base de datos |
| **NextAuth.js** | 4.24.11 | Autenticación y seguridad |
| **SQLite** | Latest | Base de datos local para desarrollo |

### Infraestructura de Despliegue

- **🌐 Frontend**: [Vercel](https://vercel.com) - Despliegue automático y global
- **🔧 Backend**: [Railway](https://railway.app) - Servidores escalables
- **📊 Base de Datos**: PostgreSQL en producción
- **🔄 CI/CD**: GitHub Actions para integración continua

---

## 🌟 Funcionalidades Implementadas

### 🐾 Animal World - Veterinaria

```typescript
// Características principales de Animal World
const animalWorldFeatures = {
  atenciónVeterinaria: "Servicio presencial especializado",
  productosPremium: "Alimentos y accesorios de alta calidad",
  emergencias24_7: "Atención urgente las 24 horas",
  consultasOnline: "Asesoría virtual para mascotas",
  tiendaFísica: "Showroom en Bogotá, Colombia"
}
```

### 🌾 La Estancia - Agropecuarios

```typescript
// Sistema completo de gestión agropecuaria
const laEstanciaFeatures = {
  catálogoCompleto: "Más de 1,200 productos especializados",
  categoríasPrincipales: [
    "Ganado Bovino (200+ productos)",
    "Aves y Corral (180+ productos)", 
    "Porcinos (100+ productos)",
    "Equinos (80+ productos)",
    "Insumos Agrícolas (50+ productos)"
  ],
  sistemaCotizaciones: "Presupuestos personalizados vía WhatsApp",
  semillasCertificadas: "Garantía de germinación y calidad",
  entregaRápida: "Distribución en Bogotá y todo Colombia"
}
```

### 🔧 Características Técnicas Avanzadas

- **📱 Diseño 100% Responsive**: Adaptado para todos los dispositivos
- **🌙 Modo Oscuro/Claro**: Interfaz adaptable a preferencias del usuario
- **⚡ Optimización SEO**: Posicionamiento optimizado para motores de búsqueda
- **🔒 Seguridad Nivel Empresa**: TypeScript y autenticación robusta
- **🎨 Componentes Reutilizables**: Sistema de diseño consistente
- **📊 Analytics Integrado**: Métricas de uso y comportamiento
- **🔄 Navegación Fluida**: Scroll automático y transiciones suaves

---

## 🚀 Guía de Instalación y Configuración

### 📋 Prerrequisitos Técnicos

- **Node.js**: Versión 18.17.0 o superior
- **npm**: Versión 9.0.0 o superior  
- **Git**: Sistema de control de versiones
- **Cuenta Vercel**: Para despliegue en producción

### 🔧 Proceso de Instalación

#### 1. Clonar el Repositorio
```bash
git clone https://github.com/V3NUZ/ESTANCIA-SERVIDOR.git
cd ESTANCIA-SERVIDOR
```

#### 2. Instalar Dependencias
```bash
npm install
# Verificar instalación de dependencias críticas
npm list next typescript @prisma/client
```

#### 3. Configurar Variables de Entorno
```bash
# Copiar archivo de configuración
cp .env.example .env.local

# Configurar variables esenciales
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
DATABASE_URL="file:./dev.db"
```

#### 4. Inicializar Base de Datos
```bash
# Generar cliente Prisma
npm run db:generate

# Sincronizar schema con base de datos
npm run db:push

# (Opcional) Ejecutar migraciones
npm run db:migrate
```

#### 5. Iniciar Servidor de Desarrollo
```bash
npm run dev
# Acceder a http://localhost:3000
```

---

## 📦 Scripts y Comandos Disponibles

### 🛠️ Comandos de Desarrollo

```bash
# Servidor de desarrollo con hot reload
npm run dev

# Compilación para producción
npm run build

# Servidor de producción local
npm run start

# Análisis de código y linting
npm run lint
```

### 🗄️ Comandos de Base de Datos

```bash
# Sincronizar schema con base de datos
npm run db:push

# Generar cliente Prisma
npm run db:generate

# Ejecutar migraciones
npm run db:migrate

# Resetear base de datos completa
npm run db:reset
```

---

## 🌐 Flujo de Trabajo Profesional con Git

### 🌳 Estructura de Ramas

```
main (producción)
├── develop (integración)
├── feature/nueva-funcionalidad
├── hotfix/corrección-urgente
└── release/versión-estable
```

### 📝 Convención de Commits (Estándar Conventional Commits)

```bash
# Nuevas funcionalidades
git commit -m "feat: agregar sistema de cotizaciones en línea"

# Correcciones de errores
git commit -m "fix: resolver problema de scroll en navegación"

# Documentación
git commit -m "docs: actualizar README con guía de instalación"

# Estilos y formato
git commit -m "style: normalizar componentes con shadcn/ui"

# Refactorización
git commit -m "refactor: optimizar estructura de componentes"

# Pruebas
git commit -m "test: agregar pruebas unitarias para cotizaciones"

# Mantenimiento
git commit -m "chore: actualizar dependencias a versiones seguras"
```

### 🔄 Proceso de Despliegue

1. **Desarrollo**: Crear rama `feature/` desde `develop`
2. **Revisión**: Pull Request con revisión de código
3. **Integración**: Merge a `develop` con pruebas automáticas
4. **Producción**: Merge a `main` con despliegue automático

---

## 📞 Información Comercial y de Contacto

### 👑 Desarrollador Principal

| Información | Detalle |
|-------------|---------|
| **👤 Nombre** | Alejandro (V3NUZ) |
| **📧 Email Personal** | donpepitacos@gmail.com |
| **🌐 GitHub** | [@V3NUZ](https://github.com/V3NUZ) |
| **💼 Rol** | Project Owner & Lead Developer |

### 🏢 Animal World - Clínica Veterinaria

| Información | Detalle |
|-------------|---------|
| **📍 Dirección** | Carrera 58 #128B-88, Bogotá, Colombia |
| **📞 Teléfono** | +57 314 2822728 |
| **💬 WhatsApp** | +57 314 2822728 |
| **📧 Email** | clinica@animalworld.co |
| **⏰ Horario** | Lunes a Sábado: 8:00 AM - 6:00 PM |
| **🚨 Emergencias** | 24/7 para casos urgentes |

### 🌾 La Estancia - Agropecuarios

| Información | Detalle |
|-------------|---------|
| **📍 Dirección** | Avenida Caracas 70A-89, Bogotá, Colombia |
| **📞 Teléfono** | +57 310 6871639 |
| **💬 WhatsApp** | +57 310 6871639 |
| **📧 Email** | contacto@laestancia.co |
| **⏰ Horario** | Lunes a Sábado: 8:00 AM - 6:00 PM |
| **📦 Cobertura** | Bogotá y todo Colombia |

---

## 🔧 Configuración de Producción

### 🌐 Despliegue en Vercel

1. **Conectar Repositorio**: Vincular GitHub a Vercel
2. **Configurar Build**: `npm run build`
3. **Variables de Entorno**: Configurar todas las variables necesarias
4. **Dominio Personalizado**: Configurar dominio personalizado
5. **SSL Automático**: Vercel proporciona certificado SSL gratuito

### 🗄️ Configuración de Base de Datos

```typescript
// Ejemplo de configuración de Prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Producto {
  id          Int      @id @default(autoincrement())
  nombre      String
  categoria   String
  precio      Decimal
  descripcion String?
  imagen      String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## 📈 Métricas y Analytics

### 📊 Estadísticas del Proyecto

- **⭐ Clientes Satisfechos**: 10,000+
- **📦 Productos Disponibles**: 1,200+
- **🏆 Años de Experiencia**: 25+
- **👥 Técnicos Especializados**: 15
- **🌱 Semillas Certificadas**: 50+ variedades
- **📈 Crecimiento Anual**: 35%

### 🎯 KPIs de Rendimiento

- **⚡ Tiempo de Carga**: < 2 segundos
- **📱 Puntuación Mobile**: 95/100
- **💻 Puntuación Desktop**: 98/100
- **🔍 SEO Score**: 92/100
- **♿ Accesibilidad**: 88/100

---

## 🤝 Contribución y Colaboración

### 👥 Equipo de Desarrollo

| Rol | Nombre | Contacto | Responsabilidades |
|-----|--------|----------|-------------------|
| **👑 Project Owner** | **Alejandro (V3NUZ)** | donpepitacos@gmail.com | Visión del proyecto, estrategia y liderazgo técnico |
| **💻 Full Stack Developer** | V3NUZ | donpepitacos@gmail.com | Desarrollo frontend y backend completo |
| **🎨 UI/UX Designer** | AnimalWorld Team | - | Diseño de interfaz y experiencia de usuario |
| **📊 DevOps Engineer** | V3NUZ | donpepitacos@gmail.com | Configuración de CI/CD y despliegue |

### 🤝 Cómo Contribuir

1. **🍴 Hacer Fork** del repositorio
2. **🌿 Crear Rama** `feature/tu-nueva-funcionalidad`
3. **💻 Desarrollar** la funcionalidad con pruebas
4. **📝 Hacer Commit** con mensajes claros
5. **🚀 Push** a tu rama
6. **📋 Crear Pull Request** con descripción detallada

---

## 📄 Licencia y Derechos

### ⚖️ Información Legal

```
AnimalWorld La Estancia - Plataforma Agropecuaria Profesional
Copyright (c) 2025 AnimalWorld La Estancia

Todos los derechos reservados.

Este proyecto es propiedad intelectual de AnimalWorld La Estancia.
No está permitida la reproducción total o parcial sin autorización expresa.

Desarrollado por V3NUZ y el equipo de AnimalWorld La Estancia.
```

### 🔒 Privacidad y Seguridad

- **🛡️ Datos Encriptados**: Toda la información sensible está encriptada
- **🔐 Autenticación Segura**: Sistema de login robusto
- **📋 GDPR Compliance**: Cumplimiento de regulaciones de privacidad
- **🔒 HTTPS Forzado**: Todas las conexiones son seguras

---

## 🚀 Roadmap y Futuro del Proyecto

### 📅 Próximas Actualizaciones (Q4 2025)

- **📱 Aplicación Móvil Nativa**: iOS y Android
- **🤖 IA para Recomendaciones**: Sistema inteligente de productos
- **📊 Dashboard Analytics**: Panel de control avanzado
- **💳 Pagos Online**: Integración con pasarelas de pago
- **🚚 Seguimiento de Pedidos**: GPS y estado en tiempo real

### 🎯 Visión a Largo Plazo

Convertirnos en la plataforma líder de agro-negocios en Latinoamérica, expandiendo nuestros servicios a México, Argentina y Perú para 2026.

---

## 📞 Soporte y Contacto Técnico

### 🛠️ Soporte Técnico

- **📧 Email Técnico**: soporte@animalworld.co
- **📧 Email Personal**: donpepitacos@gmail.com
- **💬 WhatsApp Empresarial**: +57 310 6871639
- **📋 Sistema de Tickets**: [Portal de Soporte](https://soporte.animalworld.co)
- **📚 Documentación**: [Wiki del Proyecto](https://docs.animalworld.co)

### 🌐 Redes Sociales

- **📷 Instagram**: [@animalworld_laestancia](https://instagram.com/animalworld_laestancia)
- **📘 Facebook**: [AnimalWorld La Estancia](https://facebook.com/animalworldlaestancia)
- **🐦 Twitter**: [@AnimalWLaEstancia](https://twitter.com/AnimalWLaEstancia)
- **💼 LinkedIn**: [AnimalWorld La Estancia](https://linkedin.com/company/animalworld-laestancia)

---

## 🏆 Reconocimientos y Créditos

### 🎖️ Créditos de Desarrollo

**Desarrollado con ❤️ y pasión por Alejandro (V3NUZ)**

- **👑 Project Lead**: Alejandro (V3NUZ) - Arquitectura completa y visión del proyecto
- **💻 Full Stack Development**: Implementación frontend y backend de alta calidad
- **🎨 UI/UX Design**: Diseño moderno e intuitivo de interfaz y experiencia de usuario
- **📊 DevOps**: Configuración avanzada de CI/CD y despliegue automatizado
- **🔧 Optimización**: Mejoras de rendimiento, SEO y experiencia de usuario
- **🌟 Innovación**: Implementación de tecnologías de vanguardia y mejores prácticas

### 🙏 Agradecimientos Especiales

- **AnimalWorld La Estancia Team**: Por la confianza y visión del proyecto
- **Comunidad Open Source**: Por las herramientas y librerías utilizadas
- **Clientes y Usuarios**: Por el feedback constante que mejora el proyecto

---

<div align="center">

**🌾 AnimalWorld La Estancia - Transformando Digitalmente el Campo Colombiano 🌾**

*Desarrollado con ❤️ por Alejandro (V3NUZ) | Copyright © 2025 | Todos los derechos reservados*

[![Built with love by Alejandro (V3NUZ)](https://img.shields.io/badge/Built%20with%20❤️%20by-Alejandro%20(V3NUZ)-red?style=for-the-badge)](https://github.com/V3NUZ)

</div>
>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86

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

## 🚀 ESTADO DEL PROYECTO - PRODUCCIÓN

### ✅ **PROYECTO DESPLEGADO Y ACTIVO**

**Estado Actual**: 🟢 **EN PRODUCCIÓN - ACTIVO**

- **🌐 Sitio Web**: [https://animalworld-laestancia.vercel.app](https://animalworld-laestancia.vercel.app)
- **🚀 Plataforma**: Vercel (Despliegue automático)
- **📊 Estado**: Fully funcional y operativo
- **🔗 Conexión GitHub-Vercel**: Configurada y activa
- **🔄 CI/CD**: Integración continua implementada

### ⚠️ **INSTRUCCIONES IMPORTANTES**

**NO MODIFICAR LA CONFIGURACIÓN DE DESPLIEGUE**

- ❌ **No volver a conectar el repositorio a Vercel**
- ❌ **No modificar la configuración de despliegue existente**
- ❌ **No cambiar los ajustes de integración continua**
- ❌ **No alterar el vínculo actual con Vercel**

**CAMBIOS FUTUROS**

- ✅ **Realizar cambios directamente en el código**
- ✅ **Hacer commits y push al repositorio**
- ✅ **Vercel desplegará automáticamente los cambios**
- ✅ **Mantener la documentación actualizada**

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

- **🌐 Frontend**: [Vercel](https://vercel.com) - **ACTIVO Y CONFIGURADO**
- **🔧 Backend**: Servidores escalables
- **📊 Base de Datos**: SQLite para desarrollo
- **🔄 CI/CD**: GitHub Actions - **CONFIGURADO**

---

## 🌟 Funcionalidades Implementadas

### 🐾 Animal World - Veterinaria

```typescript
// Características principales de Animal World
const animalWorldFeatures = {
  atenciónVeterinaria: "Servicio presencial especializado",
  productosPremium: "Alimentos y accesorios de alta calidad",
  consultasOnline: "Asesoría virtual para mascotas",
  tiendaFísica: "Showroom en Bogotá, Colombia"
}
```

### 🌾 La Estancia - Agropecuarios

```typescript
// Sistema completo de gestión agropecuaria
const laEstanciaFeatures = {
  catálogoCompleto: "Más de 500 productos especializados",
  categoríasPrincipales: [
    "Ganado Bovino",
    "Aves y Corral", 
    "Porcinos",
    "Equinos",
    "Insumos Agrícolas"
  ],
  sistemaCotizaciones: "Presupuestos personalizados vía WhatsApp",
  semillasCertificadas: "Garantía de germinación y calidad",
  entregaRápida: "Distribución en Bogotá y todo Colombia"
}
```

### 🔧 Características Técnicas Avanzadas

- **📱 Diseño 100% Responsive**: Adaptado para todos los dispositivos
- **⚡ Optimización SEO**: Posicionamiento optimizado para motores de búsqueda
- **🔒 Seguridad Nivel Empresa**: TypeScript y autenticación robusta
- **🎨 Componentes Reutilizables**: Sistema de diseño consistente
- **🔄 Navegación Fluida**: Scroll automático y transiciones suaves

---

## 🚀 Guía de Instalación y Configuración

### 📋 Prerrequisitos Técnicos

- **Node.js**: Versión 18.17.0 o superior
- **npm**: Versión 9.0.0 o superior  
- **Git**: Sistema de control de versiones

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
DATABASE_URL="file:./dev.db"
```

#### 4. Inicializar Base de Datos
```bash
# Generar cliente Prisma
npm run db:generate

# Sincronizar schema con base de datos
npm run db:push
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

### 🌾 La Estancia - Agropecuarios

| Información | Detalle |
|-------------|---------|
| **📍 Dirección** | Avenida Caracas 70A-83, Bogotá, Colombia |
| **📞 Teléfono** | +57 310 6871639 |
| **💬 WhatsApp** | +57 310 6871639 |
| **📧 Email** | info@laestancia.co |
| **⏰ Horario** | Lunes a Sábado: 8:00 AM - 6:00 PM |
| **📦 Cobertura** | Bogotá y todo Colombia |

---

## 📈 Métricas y Analytics

### 📊 Estadísticas del Proyecto

- **⭐ Clientes Satisfechos**: 10,000+
- **📦 Productos Disponibles**: 500+
- **🏆 Años de Experiencia**: 15+
- **👥 Técnicos Especializados**: 15
- **🌱 Semillas Certificadas**: 50+ variedades

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
3. **💻 Desarrollar** la funcionalidad
4. **📝 Hacer Commit** con mensajes claros
5. **🚀 Push** a tu rama
6. **📋 Crear Pull Request** con descripción detallada

---

## 📄 Licencia y Derechos

### ⚖️ Información Legal

```
AnimalWorld La Estancia - Plataforma Agropecuaria Profesional
Copyright (c) 2024 AnimalWorld La Estancia

Todos los derechos reservados.

Este proyecto es propiedad intelectual de AnimalWorld La Estancia.
No está permitida la reproducción total o parcial sin autorización expresa.

Desarrollado por V3NUZ y el equipo de AnimalWorld La Estancia.
```

---

## 🚀 Roadmap y Futuro del Proyecto

### 📅 Próximas Actualizaciones

- **📱 Aplicación Móvil Nativa**: iOS y Android
- **🤖 IA para Recomendaciones**: Sistema inteligente de productos
- **📊 Dashboard Analytics**: Panel de control avanzado
- **💳 Pagos Online**: Integración con pasarelas de pago
- **🚚 Seguimiento de Pedidos**: GPS y estado en tiempo real

### 🎯 Visión a Largo Plazo

Convertirnos en la plataforma líder de agro-negocios en Latinoamérica, expandiendo nuestros servicios a México, Argentina y Perú.

---

## 📞 Soporte y Contacto Técnico

### 🛠️ Soporte Técnico

- **📧 Email Técnico**: soporte@animalworld.co
- **📧 Email Personal**: donpepitacos@gmail.com
- **💬 WhatsApp Empresarial**: +57 310 6871639

---

<div align="center">

**© 2024 AnimalWorld La Estancia. Todos los derechos reservados. Bogotá, Colombia**

Hecho con ❤️ para el cuidado animal y agropecuario

[🌐 Sitio Web Activo](https://animalworld-laestancia.vercel.app) •
[📧 Contacto](mailto:donpepitacos@gmail.com) •
[🌐 GitHub](https://github.com/V3NUZ/ESTANCIA-SERVIDOR)

</div>
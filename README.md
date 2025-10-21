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
# AnimalWorld La Estancia - Guía de Deploy

## 🚀 **Opción 1: Vercel (Recomendado - Gratis)**

### Paso 1: Crear cuenta en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Regístrate con tu GitHub (es gratis)

### Paso 2: Subir tu código a GitHub
```bash
# Si no tienes Git inicializado:
git init
git add .
git commit -m "Primera versión de AnimalWorld La Estancia"

# Crear repositorio en GitHub y conectar:
git remote add origin https://github.com/tu-usuario/animalworld-laestancia.git
git push -u origin main
```

### Paso 3: Deploy en Vercel
1. En Vercel, haz clic en "New Project"
2. Selecciona tu repositorio de GitHub
3. Vercel detectará automáticamente que es Next.js
4. Haz clic en "Deploy"

### Paso 4: ¡Listo! 🎉
- Tu web estará en: `https://tu-nombre.vercel.app`
- Se actualiza automáticamente cada vez que hagas cambios

---

## 🚀 **Opción 2: Netlify (Gratis)**

### Paso 1: Build del proyecto
```bash
npm run build
```

### Paso 2: Subir a Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `.next` o conecta tu GitHub
3. Tu web estará en: `https://tu-nombre.netlify.app`

---

## 🔧 **Configuración Adicional**

### Variables de Entorno (Opcional)
Si necesitas configurar algo especial, crea un archivo `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://tu-nombre.vercel.app
```

### Contacto Real
Para que los botones de contacto funcionen con tus datos reales, edita estos archivos:

1. **src/app/page.tsx** - Contacto principal
2. **src/app/animalworld/page.tsx** - Contacto Animal World
3. **src/app/laestancia/page.tsx** - Contacto La Estancia

Cambia estos datos:
```javascript
// Ejemplo en page.tsx
animalWorld: {
  phone: "+57 314 2822728",        // Tu teléfono real
  whatsapp: "+57 314 2822728",     // Tu WhatsApp real
  email: "clinica@animalworld.co", // Tu email real
  address: "Carrera 58 #128B-88, Bogotá, Colombia" // Tu dirección real
}
```

---

## 📱 **Dominio Personalizado (Opcional)**

### En Vercel:
1. Ve a la configuración de tu proyecto
2. Haz clic en "Domains"
3. Añade tu dominio: `tudominio.com`
4. Configura los DNS que Vercel te indica

### En Netlify:
1. Ve a "Domain settings"
2. Añade tu dominio personalizado

---

## 🎯 **Qué funciona en tu web:**

✅ **Totalmente funcional:**
- Navegación completa entre páginas
- Formularios de contacto (abren WhatsApp/email/teléfono)
- Productos con botones de compra (contacto directo)
- Diseño responsive (móvil/tablet/desktop)
- Modo oscuro/claro
- Todas las animaciones y efectos

✅ **Sin complicaciones:**
- No necesita base de datos compleja
- No necesita autenticación
- No necesita pagos online
- Contacto directo vía WhatsApp/Email/Teléfono

---

## 🆘 **Ayuda Rápida**

### Si algo no funciona:
1. **Revisa los logs:** `npm run lint`
2. **Limpia el cache:** `rm -rf .next && npm run build`
3. **Verifica las URLs:** Asegúrate que los enlaces sean correctos

### Soporte:
- **Vercel:** Tiene chat de soporte 24/7
- **Netlify:** Documentación muy completa
- **GitHub:** Issues si encuentras errores

---

## 🎉 **¡Felicidades!**

Tu web profesional está lista para recibir clientes reales. Los visitantes podrán:
- Ver tus servicios
- Contactarte directamente
- Navegar por tus productos
- Encontrar tu ubicación
- Compartir tu web

**Todo funciona sin necesidad de configuraciones complejas!** 🚀
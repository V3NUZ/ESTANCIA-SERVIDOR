/**
 * Layout Principal - AnimalWorld La Estancia
 * 
 * Componente raíz que envuelve toda la aplicación.
 * Configura el tema, metadata, y estructura base del sitio.
 * 
 * @author V3NUZ (Project Owner & Lead Developer)
 * @version 2.0.0
 * @since 2025-10-21
 * @copyright AnimalWorld La Estancia © 2025
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/app/providers";
import { HydrationFix } from "@/components/hydration-fix";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Animal World - La Estancia | Pet Shop e Insumos Agropecuarios",
    template: "%s | Animal World - La Estancia"
  },
  description: "Tu tienda especializada en productos para mascotas y animales de granja. Alimentos, insumos y servicios veterinarios de calidad.",
  keywords: ["Animal World", "La Estancia", "Pet Shop", "Insumos Agropecuarios", "Alimentos Mascotas", "Ganado", "Aves", "Veterinaria", "Colombia", "Bogotá"],
  authors: [{ name: "Animal World - La Estancia Team" }],
  creator: "Animal World - La Estancia",
  publisher: "Animal World - La Estancia",
  icons: {
    icon: "https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3",
    shortcut: "https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3",
    apple: "https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3",
  },
  openGraph: {
    title: "Animal World - La Estancia | Pet Shop e Insumos Agropecuarios",
    description: "Todo lo que tus animales necesitan en un solo lugar",
    url: "https://animalworld-laestancia.cl",
    siteName: "Animal World - La Estancia",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3",
        width: 1200,
        height: 630,
        alt: "Animal World - La Estancia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animal World - La Estancia | Pet Shop e Insumos Agropecuarios",
    description: "Todo lo que tus animales necesitan en un solo lugar",
    images: ["https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
        suppressHydrationWarning={true}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Desactivar restauración automática de scroll del navegador
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              
              // Limpiar atributos de extensiones antes de React hydration
              (function() {
                var problematicAttrs = ['bis_skin_checked', 'data-new-gr-c-s-check-loaded', 'data-gr-ext-installed'];
                function clean() {
                  problematicAttrs.forEach(function(attr) {
                    var elements = document.querySelectorAll('[' + attr + ']');
                    elements.forEach(function(el) { el.removeAttribute(attr); });
                  });
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', clean);
                } else {
                  clean();
                }
                setTimeout(clean, 100);
              })();
            `,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="animalworld-theme"
        >
          <HydrationFix />
          <ScrollToTop />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
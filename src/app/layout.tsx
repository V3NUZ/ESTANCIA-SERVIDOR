import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Animal World - La Estancia | Pet Shop e Insumos Agropecuarios",
  description: "Tu tienda especializada en productos para mascotas y animales de granja. Alimentos, insumos y servicios veterinarios de calidad.",
  keywords: ["Animal World", "La Estancia", "Pet Shop", "Insumos Agropecuarios", "Alimentos Mascotas", "Ganado", "Aves", "Veterinaria", "Chile"],
  authors: [{ name: "Animal World - La Estancia Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3",
  },
  openGraph: {
    title: "Animal World - La Estancia | Pet Shop e Insumos Agropecuarios",
    description: "Todo lo que tus animales necesitan en un solo lugar",
    url: "https://animalworld-laestancia.cl",
    siteName: "Animal World - La Estancia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animal World - La Estancia | Pet Shop e Insumos Agropecuarios",
    description: "Todo lo que tus animales necesitan en un solo lugar",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { es } from "@/i18n/dictionaries/es";
import { LangProvider } from "@/context/lang-context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

/**
 * Layout raíz (Server Component).
 * Tema: <ThemeProvider> (next-themes, afuera) pone la clase .dark en <html>
 * y persiste la elección en localStorage.
 * Idioma: <LangProvider> (adentro) permite useDictionary()/useLang() en
 * cualquier componente hijo. Son dos sistemas independientes: uno toca la
 * clase del <html>, el otro el atributo lang y su propio localStorage.
 * metadata exportada = los <title> y <meta description> del SEO.
 * ! suppressHydrationWarning: el script anti-flash de next-themes aplica la
 * clase .dark ANTES de que React hidrate, así que el <html> del cliente
 * puede diferir del del servidor y hay que permitirlo.
 */
export const metadata: Metadata = {
  title: es.meta.title,
  description: es.meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <LangProvider>
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
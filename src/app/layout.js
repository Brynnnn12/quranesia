"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, createContext, useContext, useEffect } from "react";
import { LoadingProvider } from "../hooks/useLoading";
import IslamicLoader from "../components/IslamicLoader";
import { useLoading } from "../hooks/useLoading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dark Mode Context
const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      setIsDarkMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <LoadingProvider>{children}</LoadingProvider>
    </DarkModeContext.Provider>
  );
}

function AppWithLoader({ children }) {
  const { isLoading, loadingMessage } = useLoading();

  return (
    <>
      {children}
      <IslamicLoader isLoading={isLoading} message={loadingMessage} />
    </>
  );
}

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <title>QuranESIA - Al-Quran Digital Indonesia</title>
        <meta
          name="description"
          content="Baca Al-Quran digital dengan terjemahan Indonesia, tafsir, dan audio"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <QueryClientProvider client={queryClient}>
          <DarkModeProvider>
            <LoadingProvider>
              <AppWithLoader>{children}</AppWithLoader>
            </LoadingProvider>
          </DarkModeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

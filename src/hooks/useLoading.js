"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("جاري التحميل...");
  const router = useRouter();

  const showLoading = (message = "جاري التحميل...") => {
    setLoadingMessage(message);
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  const navigateWithLoading = (path, message = "الانتقال إلى الصفحة...") => {
    showLoading(message);
    // Small delay to show loading animation
    setTimeout(() => {
      router.push(path);
      // Hide loading after navigation
      setTimeout(hideLoading, 500);
    }, 300);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loadingMessage,
        showLoading,
        hideLoading,
        navigateWithLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}

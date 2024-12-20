import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const ThemeContext = createContext();

// Proveedor del tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useTheme = () => useContext(ThemeContext);

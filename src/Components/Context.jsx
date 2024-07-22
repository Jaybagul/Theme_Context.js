import React, { createContext, useState } from 'react';

export const themecontext = createContext();

export function MainTheme({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <themecontext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themecontext.Provider>
  );
}

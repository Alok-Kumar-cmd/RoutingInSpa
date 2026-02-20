import { createContext, useContext, useState, useReducer } from "react";
import { appReducer, initialState } from "../reducer/appReducer";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider value={{ theme, toggleTheme, state, dispatch }}>
      <div className={theme}>{children}</div>
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
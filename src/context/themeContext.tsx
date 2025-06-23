import { createContext, ReactNode, useEffect, useState } from "react";
import { getTheme, ThemeName } from "../style/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/global";

const DEFAULT_THEME_NAME = "light";
const THEME_LOCALSTORAGE_KEY = "book_store_theme";

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}
export const state: State = {
  themeName: DEFAULT_THEME_NAME as ThemeName,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeName>("dark");
  console.log(`현재 테마 : ${themeName}`);
  console.log(
    `저장되있던 테마 : ${localStorage.getItem(THEME_LOCALSTORAGE_KEY)}`
  );
  const toggleTheme = () => {
    const newTheme = themeName === "light" ? "dark" : "light";
    setThemeName(newTheme);
    console.log("여기서 변경");
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
  };

  useEffect(() => {
    const savedThemeName = localStorage.getItem(
      THEME_LOCALSTORAGE_KEY
    ) as ThemeName;

    setThemeName(savedThemeName || DEFAULT_THEME_NAME);
  }, []);
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Contextのみを定義（Providerは定義しない）
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

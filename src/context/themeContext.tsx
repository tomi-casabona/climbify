import { createContext, useState, useEffect } from "react";
import { ProviderProps } from "../types/themeTypes";
import { ThemeContextType } from "../types/themeTypes";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: ProviderProps) => {
	const [theme, setTheme] = useState<string>("dark");

	useEffect(() => {
		document.querySelector("html")?.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

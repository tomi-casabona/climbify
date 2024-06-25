export type ProviderProps = {
    children: React.ReactNode;
};

export interface ThemeContextType {
    theme: string;
    toggleTheme: (() => void) | undefined;
}
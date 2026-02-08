import { useContext } from 'react';
import { createContext } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
};

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: 'system',
  setTheme: () => null,
  resolvedTheme: 'dark',
});

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  // Calculate resolved theme
  let resolvedTheme: 'dark' | 'light' = 'dark';
  
  if (context.theme === 'system') {
    resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } else {
    resolvedTheme = context.theme;
  }

  return {
    ...context,
    resolvedTheme,
  };
};

export { ThemeProviderContext };
import { ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemeProvider> {children} </NextThemeProvider>
  );
};

export default Providers;

import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = mode => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark-mode');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      setTheme('light');
    }
  }

  // Intercambia los temas claro y oscuro
  const toggleTheme = () => {
    if (theme === 'dark') {
      localStorage.setItem('dark-mode', 'light');
      setMode('light');
    } else {
      localStorage.setItem('dark-mode', 'dark');
      setMode('dark');
    }
  }

  useEffect(() => {
    // Recupera el valor del modo oscuro almacenado en el Local Storage
    const localTheme = localStorage.getItem('dark-mode');

    // Si no hay almacenado un tema en el Local Storage se comprueba el del sistema operativo
    if (matchMedia && matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {
      setMode('dark');
    }

    // Si hay definido un valor en el Local Storage se aplica
    localTheme && setMode(localTheme);
  }, []);

  return [theme, toggleTheme]
}

export default useDarkMode;

import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    // Intercambia los temas claro y oscuro
    if (theme === 'dark') {
      localStorage.setItem('dark-mode', 'light');
      document.documentElement.classList.remove('dark-mode');
      setTheme('light');
    } else {
      localStorage.setItem('dark-mode', 'dark');
      document.documentElement.classList.add('dark-mode');
      setTheme('dark');
    }
  }

  useEffect(() => {
    // Recupera el valor del modo oscuro almacenado en el Local Storage
    const localTheme = localStorage.getItem('dark-mode');
    // Si hay definido un valor en el Local Storage se aplica
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme]
}

export default useDarkMode;

import React from 'react';
import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = intitaliValue => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', intitaliValue);
  useEffect(() => {
      if (darkMode === true) {
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
      }
  }, [darkMode]);

return [darkMode, setDarkMode];
}


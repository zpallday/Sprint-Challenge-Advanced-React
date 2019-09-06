import React from 'react';
import { useEffect, useState } from 'react';


export const useDarkMode = intitaliValue => {
    const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
      if (darkMode === true) {
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
      }
  }, [darkMode]);

return [darkMode, setDarkMode];
}


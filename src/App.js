import React, { useEffect, useState } from 'react';
import './App.css';

const getThemeLocalStorage = () => {
  let theme = 'light-theme';

  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
}


function App() {
  const [theme, setTheme] = useState(getThemeLocalStorage());

  const toogleSwitchTheme = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }

  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <header>
        <nav className='navigation'>
          <h1>Exercise of Dark-Mode..!</h1>
          <button className='btn' onClick={toogleSwitchTheme}>Toogle</button>
        </nav>
      </header>
    </main>
  );
}

export default App;

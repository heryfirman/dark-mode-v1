import React, { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [theme, setTheme] = useState('light-theme');

  const toogleSwitchTheme = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }

  useEffect(() => {
    document.documentElement.classList = theme;
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

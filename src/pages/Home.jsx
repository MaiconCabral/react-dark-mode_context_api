import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

// import { Container } from './styles';

function Home() {
    const {contextTheme} = useThemeContext()
    
  return (
    <div className='page-content'>
        <h2>Home</h2>
        <p>Theme {contextTheme}</p>
        <p>Página Inicial</p>
    </div>
  )
}

export default Home;
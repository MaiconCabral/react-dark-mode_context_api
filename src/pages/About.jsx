import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

// import { Container } from './styles';

function About() {
    const {contextTheme} = useThemeContext()
    
  return (
    <div className='page-content'>
        <h2>About</h2>
        <p>Theme {contextTheme}</p>
        <p>Página sobre</p>
    </div>
  )
}

export default About;
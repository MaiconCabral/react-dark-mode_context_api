import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

// import { Container } from './styles';

function Contact() {
    const {contextTheme} = useThemeContext()
    
  return (
    <div className='page-content'>
        <h2>Contact</h2>
        <p>Theme {contextTheme}</p>
        <p>Página de Contato</p>
    </div>
  )
}

export default Contact;
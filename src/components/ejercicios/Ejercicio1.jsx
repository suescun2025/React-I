import { useState, useEffect } from 'react'
import BackButton from '../BackButton'
import './Ejercicio1.css'

function Ejercicio1({ onBack }) {
  const [colorFondo, setColorFondo] = useState('#f0f0f0')

  const cambiarColor = () => {
    const colores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33A1FF']
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)]
    setColorFondo(colorAleatorio)
  }

  useEffect(() => {
    const fondoOriginal = window.getComputedStyle(document.body).background
    
    document.body.style.background = colorFondo
    document.body.style.backgroundColor = colorFondo
    
    return () => {
      document.body.style.background = fondoOriginal
      document.body.style.backgroundColor = ''
    }
  }, [colorFondo])

  return (
    <div className="ejercicio1-container">
      <h1>Cambiador de Color de Fondo</h1>
      <button onClick={cambiarColor}>Cambiar Color</button>
      <BackButton onBack={onBack} />
    </div>
  )
}

export default Ejercicio1


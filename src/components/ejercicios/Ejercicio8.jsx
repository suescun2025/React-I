import { useState } from 'react'
import BackButton from '../BackButton'
import './Ejercicio8.css'

function Ejercicio8({ onBack }) {
  const [texto, setTexto] = useState('')
  const [resultado, setResultado] = useState('')

  const contarPalabrasYCaracteres = () => {
    const textoTrim = texto.trim()
    const palabras =
      textoTrim === ''
        ? 0
        : textoTrim.split(/\s+/).filter((palabra) => palabra.length > 0)
            .length
    const caracteres = texto.length
    setResultado(`Palabras: ${palabras} - Caracteres: ${caracteres}`)
  }

  const limpiar = () => {
    setTexto('')
    setResultado('')
  }

  return (
    <div className="ejercicio8-container">
      <h1>Contador de Palabras y Caracteres</h1>
      <textarea
        id="texto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Ingrese su texto aquí"
      />
      <button onClick={contarPalabrasYCaracteres}>
        Contar Palabras y Caracteres
      </button>
      <button id="limpiar" onClick={limpiar}>
        Limpiar
      </button>
      {resultado && <p id="resultado">{resultado}</p>}
      <BackButton onBack={onBack} />
    </div>
  )
}

export default Ejercicio8


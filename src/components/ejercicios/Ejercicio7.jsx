import { useState } from 'react'
import BackButton from '../BackButton'
import './Ejercicio7.css'

function Ejercicio7({ onBack }) {
  const [longitud, setLongitud] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [error, setError] = useState('')

  const generarContraseña = (long) => {
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
    let pass = ''
    for (let i = 0; i < long; i++) {
      pass += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      )
    }
    return pass
  }

  const manejarGenerar = () => {
    const valorLongitud = longitud.trim()
    const long = parseInt(valorLongitud, 10)

    if (!valorLongitud || isNaN(long) || long < 4) {
      setError('Error: La longitud debe ser mayor o igual a 4')
      setContraseña('')
      return
    }

    setError('')
    setContraseña(generarContraseña(long))
  }

  return (
    <div className="ejercicio7-container">
      <h1>Generador de Contraseñas Aleatorias</h1>
      <input
        type="number"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        placeholder="Longitud de la contraseña"
      />
      <button onClick={manejarGenerar}>Generar Contraseña</button>
      {error && <p className="error">{error}</p>}
      {contraseña && <p id="contraseña">{contraseña}</p>}
      <BackButton onBack={onBack} />
    </div>
  )
}

export default Ejercicio7


import { useState } from 'react'
import BackButton from '../BackButton'
import './Ejercicio5.css'

function Ejercicio5({ onBack }) {
  const [primerNumero, setPrimerNumero] = useState('')
  const [segundoNumero, setSegundoNumero] = useState('')
  const [resultado, setResultado] = useState('')
  const [error, setError] = useState('')

  const validarEntradas = () => {
    if (primerNumero.trim() === '' || segundoNumero.trim() === '') {
      setError('Error: Por favor ingresa ambos números')
      setResultado('')
      return null
    }

    const numero1 = parseFloat(primerNumero)
    const numero2 = parseFloat(segundoNumero)

    if (isNaN(numero1) || isNaN(numero2)) {
      setError('Error: Por favor ingresa números válidos')
      setResultado('')
      return null
    }

    setError('')
    return { numero1, numero2 }
  }

  const sumar = () => {
    const numeros = validarEntradas()
    if (numeros === null) return
    setResultado(`Resultado: ${numeros.numero1 + numeros.numero2}`)
  }

  const restar = () => {
    const numeros = validarEntradas()
    if (numeros === null) return
    setResultado(`Resultado: ${numeros.numero1 - numeros.numero2}`)
  }

  const multiplicar = () => {
    const numeros = validarEntradas()
    if (numeros === null) return
    setResultado(`Resultado: ${numeros.numero1 * numeros.numero2}`)
  }

  const dividir = () => {
    const numeros = validarEntradas()
    if (numeros === null) return

    if (numeros.numero2 === 0) {
      setError('Error: No se puede dividir por cero')
      setResultado('')
      return
    }

    setResultado(`Resultado: ${numeros.numero1 / numeros.numero2}`)
  }

  return (
    <div className="ejercicio5-container">
      <h1>Calculadora Sencilla</h1>
      <input
        type="number"
        value={primerNumero}
        onChange={(e) => setPrimerNumero(e.target.value)}
        placeholder="Primer número"
      />
      <input
        type="number"
        value={segundoNumero}
        onChange={(e) => setSegundoNumero(e.target.value)}
        placeholder="Segundo número"
      />
      <div className="botones-container">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
      </div>
      {error && <p className="error">{error}</p>}
      {resultado && <p className="resultado">{resultado}</p>}
      <BackButton onBack={onBack} />
    </div>
  )
}

export default Ejercicio5


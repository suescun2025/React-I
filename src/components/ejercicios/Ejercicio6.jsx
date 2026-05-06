import { useState, useEffect, useRef } from 'react'
import BackButton from '../BackButton'
import './Ejercicio6.css'

function Ejercicio6({ onBack }) {
  const [tiempo, setTiempo] = useState(0)
  const [estaCorriendo, setEstaCorriendo] = useState(false)
  const intervaloRef = useRef(null)

  useEffect(() => {
    if (estaCorriendo) {
      intervaloRef.current = setInterval(() => {
        setTiempo((prev) => prev + 1)
      }, 1000)
    } else {
      clearInterval(intervaloRef.current)
    }

    return () => clearInterval(intervaloRef.current)
  }, [estaCorriendo])

  const iniciar = () => {
    setEstaCorriendo(true)
  }

  const pausar = () => {
    setEstaCorriendo(false)
  }

  const reiniciar = () => {
    setEstaCorriendo(false)
    setTiempo(0)
  }

  const horas = Math.floor(tiempo / 3600)
  const minutos = Math.floor((tiempo % 3600) / 60)
  const segundos = tiempo % 60
  const tiempoFormateado = `${horas.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`

  return (
    <div className="ejercicio6-container">
      <h1>Temporizador con Inicio, Pausa y Reinicio</h1>
      <p id="temporizador">{tiempoFormateado}</p>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <BackButton onBack={onBack} />
    </div>
  )
}

export default Ejercicio6


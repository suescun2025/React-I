import { useState } from 'react'
import BackButton from '../BackButton'
import './Ejercicio2.css'

function Ejercicio2({ onBack }) {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }

  return (
    <div className="ejercicio2-container">
      <h1>Contador de Clics</h1>
      <p id="contador">{contador}</p>
      <button onClick={incrementar}>Clic</button>
      <BackButton onBack={onBack} />
    </div>
  )
}

export default Ejercicio2


import { useState } from 'react'
import Index from './components/Index'
import Ejercicio1 from './components/ejercicios/Ejercicio1'
import Ejercicio2 from './components/ejercicios/Ejercicio2'
import Ejercicio3 from './components/ejercicios/Ejercicio3'
import Ejercicio4 from './components/ejercicios/Ejercicio4'
import Ejercicio5 from './components/ejercicios/Ejercicio5'
import Ejercicio6 from './components/ejercicios/Ejercicio6'
import Ejercicio7 from './components/ejercicios/Ejercicio7'
import Ejercicio8 from './components/ejercicios/Ejercicio8'
import Ejercicio9 from './components/ejercicios/Ejercicio9'
import './App.css'

function App() {
  const [ejercicioActual, setEjercicioActual] = useState(null)

  const ejercicios = {
    1: Ejercicio1,
    2: Ejercicio2,
    3: Ejercicio3,
    4: Ejercicio4,
    5: Ejercicio5,
    6: Ejercicio6,
    7: Ejercicio7,
    8: Ejercicio8,
    9: Ejercicio9,
  }

  const manejarClicEjercicio = (numeroEjercicio) => {
    setEjercicioActual(numeroEjercicio)
  }

  const manejarVolverAlIndice = () => {
    setEjercicioActual(null)
  }

  const ComponenteActual = ejercicioActual ? ejercicios[ejercicioActual] : null

  return (
    <div className="app">
      {ComponenteActual ? (
        <ComponenteActual onBack={manejarVolverAlIndice} />
      ) : (
        <Index onExerciseClick={manejarClicEjercicio} />
      )}
    </div>
  )
}

export default App

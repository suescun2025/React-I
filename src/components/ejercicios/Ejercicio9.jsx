import { useState, useEffect } from 'react'
import BackButton from '../BackButton'
import './Ejercicio9.css'

function Ejercicio9({ onBack }) {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas')
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : []
  })
  const [tarea, setTarea] = useState('')

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = () => {
    const texto = tarea.trim()
    if (texto === '') return

    setTareas([...tareas, { texto, completada: false }])
    setTarea('')
  }

  const alternarCompletada = (index) => {
    setTareas(
      tareas.map((t, i) =>
        i === index ? { ...t, completada: !t.completada } : t
      )
    )
  }

  const limpiarCompletadas = () => {
    setTareas(tareas.filter((t) => !t.completada))
  }

  return (
    <div className="ejercicio9-container">
      <h1>Lista de Tareas con LocalStorage</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
        placeholder="Agregar Tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <div className="lista-container">
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index} className={tarea.completada ? 'completada' : ''}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => alternarCompletada(index)}
              />
              <span className="tarea-texto">{tarea.texto}</span>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={limpiarCompletadas}>Limpiar Completadas</button>
      <BackButton onBack={onBack} />
    </div>
  )
}

export default Ejercicio9


import { useState, useEffect } from 'react'
import BackButton from '../BackButton'
import './Ejercicio4.css'

const elementos = [
  'Perro',
  'Gato',
  'Pez',
  'Pájaro',
  'Conejo',
  'Tortuga',
  'Hamster',
  'Cobaya',
  'Hurón',
  'Iguana',
]

function Ejercicio4({ onBack }) {
  const [filtro, setFiltro] = useState('')
  const [elementosFiltrados, setElementosFiltrados] = useState(elementos)

  useEffect(() => {
    if (filtro.trim() === '') {
      setElementosFiltrados(elementos)
    } else {
      setElementosFiltrados(
        elementos.filter((elemento) =>
          elemento.toLowerCase().includes(filtro.toLowerCase())
        )
      )
    }
  }, [filtro])

  return (
    <div className="ejercicio4-container">
      <h1>Filtro de Búsqueda en Tiempo Real</h1>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Buscar en la lista..."
      />
      <div className="lista-container">
        <ul>
          {elementosFiltrados.length === 0 ? (
            <li className="no-results">No se encontraron resultados</li>
          ) : (
            elementosFiltrados.map((elemento, index) => (
              <li key={index}>{elemento}</li>
            ))
          )}
        </ul>
      </div>
      <BackButton onBack={onBack} />
    </div>
  )
}

export default Ejercicio4


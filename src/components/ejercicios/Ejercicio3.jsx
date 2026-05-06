import { useState } from 'react'
import BackButton from '../BackButton'
import './Ejercicio3.css'

function Ejercicio3({ onBack }) {
  const [lista, setLista] = useState([])
  const [elemento, setElemento] = useState('')

  const agregarElemento = () => {
    const texto = elemento.trim()
    if (texto !== '') {
      setLista([...lista, texto])
      setElemento('')
    }
  }

  const vaciarLista = () => {
    setLista([])
  }

  const eliminarElemento = (index) => {
    setLista(lista.filter((_, i) => i !== index))
  }

  return (
    <div className="ejercicio3-container">
      <h1>Lista Dinámica</h1>
      <input
        type="text"
        value={elemento}
        onChange={(e) => setElemento(e.target.value)}
        placeholder="Agregar Elemento"
        onKeyPress={(e) => e.key === 'Enter' && agregarElemento()}
      />
      <div className="lista-container">
        <ul>
          {lista.map((item, index) => (
            <li key={index}>
              <span className="item-text">{item}</span>
              <button
                className="delete-btn"
                onClick={() => eliminarElemento(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={agregarElemento}>Agregar</button>
      <button onClick={vaciarLista}>Vaciar Lista</button>
      <BackButton onBack={onBack} />
    </div>
  )
}

export default Ejercicio3


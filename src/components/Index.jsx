import './Index.css'

function Index({ onExerciseClick }) {
  const ejercicios = [
    { number: 1, title: 'Cambiador de Color de Fondo' },
    { number: 2, title: 'Contador de Clics' },
    { number: 3, title: 'Lista Dinámica' },
    { number: 4, title: 'Filtro de Búsqueda en Tiempo Real' },
    { number: 5, title: 'Calculadora Sencilla' },
    { number: 6, title: 'Temporizador con Inicio, Pausa y Reinicio' },
    { number: 7, title: 'Generador de Contraseñas Aleatorias' },
    { number: 8, title: 'Contador de Palabras y Caracteres' },
    { number: 9, title: 'Lista de Tareas con LocalStorage' },
  ]

  return (
    <div className="container">
      <header>
        <h1>Tareas Entregables 1 React</h1>
        <p className="subtitle">Índice</p>
      </header>

      <div className="index-container">
        <ol className="index-list">
          {ejercicios.map((ejercicio) => (
            <li key={ejercicio.number} className="index-item">
              <button
                className="index-link"
                onClick={() => onExerciseClick(ejercicio.number)}
              >
                <span className="exercise-number">{ejercicio.number}.</span>
                <span className="exercise-title">{ejercicio.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <footer>
        <p>ConquerBlocks</p>
      </footer>
    </div>
  )
}

export default Index


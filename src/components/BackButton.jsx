import './BackButton.css'

function BackButton({ onBack }) {
  return (
    <a className="back-button" onClick={(e) => { e.preventDefault(); onBack(); }} href="#">
      Regresar al índice
    </a>
  )
}

export default BackButton


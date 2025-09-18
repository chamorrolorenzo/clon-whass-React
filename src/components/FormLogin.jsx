import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormLogin = () => {
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate()

  // hook -> anzuelo -> una funcionalidad que provee react
  // use -> "usando ..."
  // useState -> usando un estado
  // un estado es una variable que cuando cambiar se rerenderiza el componente

  const PASS = "pepe123"

  const validatePassword = () => {
    setMessage(null)
    setError(null)

    if (password === PASS) {
      setMessage("Contraseña valida, serás redirigido.")
      setTimeout(() => {
        navigate("/chat")
      }, 3000)
    } else {
      setError("Contraseña invalida, intentelo nuevamente")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validatePassword()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Contraseña de acceso</label>
      <input type="text" onChange={(event) => setPassword(event.target.value)} />
      <button>Acceder</button>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  )
}

export default FormLogin
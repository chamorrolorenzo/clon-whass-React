import avatar from "../assets/avatar.jpeg"
import "../style/stylechatheader.css";

const ChatHeader = () => {
  return (
    <header className="main-header">
      <div className="chat-header">
        <img src={avatar} alt="imagen de perfil" />
        <div className="chat-name"><h3>Aiden Chavez</h3>
        <p>Last seen: 2 hours ago</p>
        </div>
      </div>
      <div className="chat-actions">
        <button title="Tomar una foto">📷</button>
        <button title="Enviar una foto">🖼️</button>
        <button title="Configuración">⚙️</button>
        <button title="Ayuda">❓</button>
      </div>
    </header>
  )
}

export default ChatHeader
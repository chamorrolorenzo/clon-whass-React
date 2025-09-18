import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import ChatFooter from "./ChatFooter"
import "../style/stylewindow.css"
const ChatWindow = () => {
  return (
    <div className="windows">
      <ChatHeader />
      <MessageList />
      <ChatFooter />
    </div>
  )
}

export default ChatWindow
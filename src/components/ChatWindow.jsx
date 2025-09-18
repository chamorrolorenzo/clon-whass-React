import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import ChatFooter from "./ChatFooter"

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
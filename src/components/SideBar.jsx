import SearchBar from "../components/SearchBar"
import ChatList from "../components/ChatList"
import "../style/stylesidebar.css";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <SearchBar />
      <ChatList />
    </aside>
  )
}

export default SideBar
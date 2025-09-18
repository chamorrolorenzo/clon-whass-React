import avatar from "../assets/avatar.jpeg"

const contacts = [
  { id: 1, name: "Vincent Porter", status: "left 7 mins ago", statusClass: "status-offline" },
  { id: 2, name: "Aiden Chavez", status: "online", statusClass: "status-online" },
  { id: 3, name: "Mike Thomas", status: "online", statusClass: "status-online", dot: "🟢"  },
  { id: 4, name: "Christian Kelly", status: "left 10 hours ago", statusClass: "status-offline", dot: "🟢"  },
  { id: 5, name: "Monica Ward", status: "online", statusClass: "status-online", dot: "🟢"  },
  { id: 6, name: "Dean Henry", status: "offline since Oct 28", statusClass: "status-offline", dot: "🟢"  },
];

const ChatList = () => {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li className="">
          <div className="contact">
            <img src={avatar} alt="imagen de perfil" />
          <div className="contac-name"><h4>{contact.name}</h4>
            <p className={contact.statusClass}>
            {contact.dot} {contact.status}
            </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
};

export default ChatList
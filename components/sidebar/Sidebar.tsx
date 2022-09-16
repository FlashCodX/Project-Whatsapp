import { Avatar, Button, IconButton } from "@mui/material";
import styles from "./Sidebar.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
const Sidebar = () => {
  const {
    container,
    header,
    iconsContainer,
    logo,
    search,
    searchInput,
    chatBtn,
  } = styles;
  return (
    <div className={container}>
      <div className={header}>
        <Avatar className={logo} />
        <div className={iconsContainer}>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className={search}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search in Chats"
          className={searchInput}
        />
      </div>
      <Button className={chatBtn}>Start a new chat</Button>
      {/* List of chats */}
    </div>
  );
};

export default Sidebar;

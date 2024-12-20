import React, { useState } from "react";
import { Chat } from "./components/Chat.jsx";
import { Auth } from "./components/Auth.jsx";
import { AppWrapper } from "./components/AppWrapper.jsx";
import Cookies from "universal-cookie";
import { SendMessage } from "./components/SendMessage.jsx";
import { db } from "./firebase/config";
import { collection } from "firebase/firestore";
import { useTheme } from "./components/ThemeContext.jsx";

const cookies = new Cookies();

const ThemeToggleButton = () => {
  const { toggleDarkMode, isDarkMode } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

function App() {
  const { isDarkMode } = useTheme();
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(false);
  const [room, setRoom] = useState("");

  const messagesRef = collection(db, "messages");

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
    <>
      <ThemeToggleButton />
      <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
        {!isInChat ? (
         <div className={`room ${isDarkMode ? 'dark-mode' : ''}`}>
          <label className={`room-label ${isDarkMode ? 'dark-mode' : ''}`}> Type room name: </label>
            <input onChange={(e) => setRoom(e.target.value)} />
            <button
              onClick={() => {
                setIsInChat(true);
              }}
            >
              Enter Chat
            </button>
          </div>
        ) : (
          <>
            <Chat room={room} />
            <div className="fixed-footer">
              <SendMessage room={room} messagesRef={messagesRef} />
            </div>
          </>
        )}
       
      </AppWrapper>
     
    </>
  );
}

export default App;
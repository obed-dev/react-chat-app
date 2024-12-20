import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useTheme } from "./ThemeContext";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat, isInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };
  const { isDarkMode } = useTheme();

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
        {!isAuth && (
          <img
            src="https://media.tenor.com/8QmnopMNjrwAAAAM/chat.gif"
            alt="imagen chat app"
            className="chat_app_image"
          />
        )}
        {children}
        <div className="sign-out">
        {isAuth && (
          <button onClick={signUserOut}> Sign Out</button>
        )}
          
        </div>

      </div>
    </div>
  );
};
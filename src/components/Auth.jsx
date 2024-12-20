import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useTheme } from "./ThemeContext";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const { isDarkMode } = useTheme();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`auth ${isDarkMode ? 'dark-mode' : ''}`}>
      <button onClick={signInWithGoogle} className={`button_signIn ${isDarkMode ? 'dark-mode' : ''}`}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" className="icon_google" />
        Sign In With Google
      </button>
    </div>
  );
};
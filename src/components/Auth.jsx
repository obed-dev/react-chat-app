import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useTheme } from "./ThemeContext";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
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
    <div className="auth">
      
      
          
      <button onClick={signInWithGoogle} className="button_signIn"> 
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" className="icon_google"/>
        Sign In With Google 
        </button>
    </div>
  );
};
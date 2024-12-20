import React, { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "../firebase/config";
import { useTheme } from "./ThemeContext";

export const SendMessage = ({ room, messagesRef }) => {
  const [newMessage, setNewMessage] = useState("");
  const { isDarkMode } = useTheme();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage.trim() === "") return;

    try {
      await addDoc(messagesRef, {
        text: newMessage.trim(),
        createdAt: serverTimestamp(),
        user: auth.currentUser?.photoURL || "https://via.placeholder.com/150",
        room,
      });

      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`new-message-form ${isDarkMode ? 'dark-mode' : ''}`}>
      <input
        type="text"
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)}
        className={`new-message-input ${isDarkMode ? 'dark-mode' : ''}`}
        placeholder="Type your message here..."
      />
      <button type="submit" className={`send-button ${isDarkMode ? 'dark-mode' : ''}`} disabled={!newMessage.trim()}>
        Send
      </button>
    </form>
  );
};
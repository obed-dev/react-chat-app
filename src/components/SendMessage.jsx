import React, { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "../firebase/config";
import { useTheme } from "./ThemeContext";


export const SendMessage = ({ room, messagesRef }) => {
  const [newMessage, setNewMessage] = useState("");

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
    <form onSubmit={handleSubmit} className="new-message-form">
      <input
        type="text"
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)}
        className="new-message-input"
        placeholder="Type your message here..."
      />
      <button type="submit" className="send-button" disabled={!newMessage.trim()}>
        Send
      </button>
    </form>
  );
};

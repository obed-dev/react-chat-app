import React, { useState, useEffect } from "react";
import { SendMessage } from "./SendMessage";
import { db } from "../firebase/config";
import {
  collection,
  where,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { useTheme } from "./ThemeContext";


export const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsuscribe();
  }, [room]);

  return (
    <>
      <div className={`chat-app ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
          <h1>Welcome to: {room.toUpperCase()} </h1>
        </div>
        <div className={`messages ${isDarkMode ? 'dark-mode' : ''}`}>
          {messages.map((message) => (
            <div key={message.id} className={`message ${isDarkMode ? 'dark-mode' : ''}`}>
              <span className="user">{message.text} </span>
              <img src={message.user} alt="" />
            </div>
          ))}
        </div>
      </div>
   
    </>
  );
};
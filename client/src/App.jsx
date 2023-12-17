import { io } from "socket.io-client";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
const socket = io.connect("http://localhost:3001");
function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
      <h1>message</h1>
      {messageReceived}
    </>
  );
}

export default App;

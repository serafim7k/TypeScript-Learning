import { useState } from "react";

const Chat = () => {
    const [ sender, setSender] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    console.log(input.trim()); // Debugging line
    if (input.trim() && sender.trim()) {
        const timestamp = new Date().toLocaleTimeString();
        setMessages([...messages, `${sender}: ${timestamp} - ${input}`]);
        setSender(""); // Clear the sender field
        setInput(""); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        placeholder="Sender:"
      />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default Chat;
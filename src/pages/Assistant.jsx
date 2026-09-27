import { useState } from "react";
import "./Assistant.css";

function Assistant() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm GRD Edge. How can I help you with GRD College today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) {
      return;
    }

    const userMessage = message.trim();

    // Add user's message to chat
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://grd-edge-ai.onrender.com/chat", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      // Show the actual backend error
      // instead of hiding it behind "Server error"
      if (!response.ok) {
        const errorData = await response.text();

        throw new Error(
          `Server error (${response.status}): ${errorData}`
        );
      }

      const data = await response.json();

      // Add AI response
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          text: data.answer,
        },
      ]);
    } catch (error) {
      console.error("GRD Edge Error:", error);

      // Show the actual error in the chat
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          text:
            error.message ||
            "GRD Edge could not process your request right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section id="assistant" className="assistant">

      <div className="assistant-heading">

        <p className="section-tag">
          GRD EDGE AI
        </p>

        <h2>
          Your college questions,
          <span> answered intelligently.</span>
        </h2>

        <p>
          Ask GRD Edge about courses, admissions,
          facilities, and other college-related information.
        </p>

      </div>


      <div className="assistant-container">

        <div className="assistant-info">

          <div className="assistant-badge">
            <span className="status-dot"></span>
            AI Assistant Online
          </div>

          <h3>
            Meet <span>GRD Edge</span>
          </h3>

          <p>
            GRD Edge uses a college knowledge base and AI
            to help students find relevant information quickly.
          </p>

          <div className="assistant-features">

            <div>
              <span>✓</span>
              College knowledge base
            </div>

            <div>
              <span>✓</span>
              Course information
            </div>

            <div>
              <span>✓</span>
              Admission assistance
            </div>

            <div>
              <span>✓</span>
              Budget calculation
            </div>

          </div>

        </div>


        <div className="chat-box">

          <div className="chat-header">

            <div className="chat-avatar">
              GRD
            </div>

            <div>
              <h4>GRD Edge</h4>
              <p>College Assistance Agent</p>
            </div>

            <span className="online-dot"></span>

          </div>


          <div className="chat-messages">

            {messages.map((item, index) => (

              <div
                key={index}
                className={`message ${
                  item.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }`}
              >

                {item.sender === "bot" && (
                  <span className="message-label">
                    GRD Edge
                  </span>
                )}

                <p>
                  {item.text}
                </p>

              </div>

            ))}


            {loading && (

              <div className="message bot-message">

                <span className="message-label">
                  GRD Edge
                </span>

                <p>
                  Thinking...
                </p>

              </div>

            )}

          </div>


          <div className="chat-input-area">

            <input
              type="text"
              placeholder="Ask GRD Edge something..."
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={handleKeyDown}
              disabled={loading}
            />

            <button
              onClick={sendMessage}
              disabled={
                loading || !message.trim()
              }
            >
              →
            </button>

          </div>


          <p className="chat-note">
            Powered by GRD Edge AI
          </p>

        </div>

      </div>

    </section>
  );
}

export default Assistant;
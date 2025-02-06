import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import asistantImage from "../assets/Asistant.png";

export default function AssistantBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Merhaba ben Makinova nasıl yardımcı olabilirim?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      {isOpen && (
        <div className="w-72 h-96 bg-white shadow-lg rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-bold">Makinova</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mesaj Alanı */}
          <div className="flex-1 overflow-hidden p-2 gap-2 flex flex-col-reverse overflow-y-auto">
            {messages
              .slice()
              .reverse()
              .map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-white shadow-md p-3  text-gray-700 border-2 border-orange-400"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
          </div>

          {/* Giriş Alanı */}
          <div className="flex items-center gap-2 border-t pt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Mesajınızı yazın..."
              className="flex-1 border p-2 rounded-md focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Aç/Kapat Butonu */}
      <button
        className=" flex items-center justify-center "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative ">
          <div className="absolute right-4 bottom-20  md:right-12 md:bottom-32 text-white px-2 py-1 rounded">
            {!isOpen && (
              <div className=" bg-white shadow-md p-3 rounded-lg text-gray-700 border-2 border-orange-400 relative">
                <p className="whitespace-nowrap text-sm">
                  Merhaba! Nasıl yardımcı olabilirim?
                </p>

                {/* Konuşma Balonunun Sağ Alt Köşesindeki Üçgen */}
                <div
                  className="absolute -bottom-2 right-4 w-0 h-0 
                    border-l-8 border-l-transparent 
                    border-t-8 border-t-orange-400 
                    border-r-8 border-r-transparent"
                ></div>

                <div
                  className="absolute -bottom-1 right-4 w-0 h-0 
                    border-l-7 border-l-transparent 
                    border-t-7 border-t-white 
                    border-r-7 border-r-transparent"
                ></div>
              </div>
            )}
          </div>
          <img
            src={asistantImage}
            alt="asistant"
            className=" w-24 h-24 md:w-40 md:h-40 mix-blend-normal"
          />
        </div>
      </button>
    </div>
  );
}

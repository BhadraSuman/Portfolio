import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Chatbot() {
    const [messages, setMessages] = useState([{ from: "bot", text: "Hello! How can I help you today?" }]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const messagesContainerRef = useRef(null);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");
        setIsLoading(true);
        axios
            .post(`${import.meta.env.VITE_BASE_URL}/chat/ask`, { question: userMessage.text })
            .then((response) => {
                const botMessage = { from: "bot", text: response.data.answer };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            })
            .catch((error) => {
                console.error(error);
                const botMessage = { from: "bot", text: "An error occurred. Please try again." };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="flex items-center justify-center  ">
            {/* Main Chat Container */}
            <div className="w-full max-w-lg bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-[1.01]">
                {/* Header */}
                <div className="bg-white/15 text-white p-5 font-bold text-xl rounded-t-3xl border-b border-white/20">AI Assistant</div>

                {/* Messages Container */}
                <div
                    ref={messagesContainerRef}
                    className="flex-1 p-5 space-y-4 overflow-y-auto min-h-[40vh] max-h-[40vh]  custom-scrollbar"
                >
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`p-4 rounded-3xl max-w-xs text-sm transform transition-all duration-300 ease-in-out shadow-md
                                ${msg.from === "user" ? "bg-blue-500 text-white rounded-br-lg" : "bg-gray-700 text-white rounded-bl-lg"}`}
                            >
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start animate-pulse">
                            <div className="px-4 py-2 rounded-3xl max-w-xs text-sm bg-gray-700 text-white rounded-bl-lg">...</div>
                        </div>
                    )}
                </div>

                {/* Input box */}
                <div className="p-4 border-t border-white/20 flex justify-between items-center gap-3 w-full">
                    <input
                        type="text"
                        className=" w-[80%] px-4 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSend}
                        className={`bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center
                                     hover:bg-blue-700 transition-colors duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={isLoading}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 transform rotate-90"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                .custom-scrollbar::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, and Opera */
                }
            `}</style>
        </div>
    );
}

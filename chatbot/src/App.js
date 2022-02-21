import ChatBot from "react-simple-chatbot";
import "./App.css";
const steps = [
  {
    id: "1",
    message: "Welcome to My chatbot, May I help you?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "{previousValue}, Please say whats your concern?",
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: "5",
  },
  {
    id: "5",
    message: "we will check internally and get back to you.",
    trigger: "6",
  },
  {
    id: "6",
    user: true,
    trigger: "7",
  },
  {
    id: "7",
    message: "Is there anything else we can do for you",
    end: true,
  },
  {
    id: "7",
    message: "Thank you for your valuable time.. we will get back to you",
    end: true,
  },
];
function App() {
  return (
    <div className="App">
      <ChatBot className="chat" steps={steps} />
    </div>
  );
}

export default App;

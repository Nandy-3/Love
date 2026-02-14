import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import Reasons from "./pages/Reasons";
import Forever from "./pages/Forever";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-200">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/forever" element={<Forever />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

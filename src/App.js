import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Nav";
import News from "./components/News";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactInfo" element={<ContactInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

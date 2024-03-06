import "./App.css";
// Start import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// End import react router dom
// Start Import Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
// End Import Pages
// Start Componets
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

// End Componets

function App() {
  return (
    <div className="overFlow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

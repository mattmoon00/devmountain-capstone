import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing/Landing";
import Menu from "./components/menu/Menu";
import Invoice from "./components/invoice/Invoice";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li id="home-link">
            <Link to="/">Home</Link>
          </li>
          <li id="menu-link">
            <Link to="/menu">Menu</Link>
          </li>
          <li id="invoice-link">
            <Link to="/invoice">Invoice</Link>
          </li>
          <li id="login-link">
            <Link to="/login">Login</Link>
          </li>
          <h1 className="header">Welcome to Matt's Bistro</h1>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

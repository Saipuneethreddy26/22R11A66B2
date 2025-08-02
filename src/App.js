import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import Home from "./Home";
import Stats from "./Stats";
import './App.css'; 

import { getLinks, log } from "./utils";

const Redirect = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const links = getLinks();

  React.useEffect(() => {
    const data = links[code];
    if (!data || Date.now() > data.validUntil) {
      alert(data ? "Link expired" : "Link not found");
      navigate("/");
    } else {
      log("REDIRECT", { code, url: data.url });
      window.location.href = data.url;
    }
  }, [code, links, navigate]);

  return <p>Redirecting...</p>;
};

const App = () => (
  <Router>
    <nav style={{ padding: 10 }}>
      <Link to="/">Home</Link> | <Link to="/stats">Stats</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/:code" element={<Redirect />} />
    </Routes>
  </Router>
);

export default App;
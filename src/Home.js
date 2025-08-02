import React, { useState } from "react";
import { saveLink, log } from "./utils";

const Home = () => {
  const [url, setUrl] = useState(""); 
  const [shortcode, setShortcode] = useState(""); 
  const [validity, setValidity] = useState(30); 

  const handleShorten = () => {
    
    if (!url) {
      alert("Please enter a URL.");
      return;
    }

    const code = shortcode || Math.random().toString(36).substr(2, 6);
    saveLink(code, url, validity);
    log("SHORTENED", { url, code, validity });

    alert(`Short URL created: http://localhost:3000/${code}`);
    setUrl("");
    setShortcode("");
    setValidity(30); 
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple URL Shortener</h2>
      

      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br /><br />
      
    
      <input
        type="text"
        placeholder="Custom shortcode (optional)"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
      />
      <br /><br />
      
   
      <input
        type="number"
        placeholder="Validity (in days)"
        value={validity}
        onChange={(e) => setValidity(Number(e.target.value))}
      />
      <br /><br />
      
      
      <button onClick={handleShorten}>Shorten</button>
    </div>
  );
};

export default Home;
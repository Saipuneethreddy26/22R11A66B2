import React from "react";
import { getLinks } from "./utils";

const Stats = () => {
  const links = getLinks(); 

  return (
    <div style={{ padding: 20 }}>
      <h2>Shortened URLs</h2>
      
    
      {Object.keys(links).length === 0 ? (
        <p>No links have been created yet.</p>
      ) : (
        <ul>
         
          {Object.entries(links).map(([code, data]) => (
            <li key={code}>
              <p>
                <strong>Shortcode:</strong> {code}<br />
                <strong>URL:</strong> {data.url}<br />
                <strong>Created At:</strong> {new Date(data.createdAt).toLocaleString()}<br />
                <strong>Valid Until:</strong> {new Date(data.validUntil).toLocaleString()}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Stats;
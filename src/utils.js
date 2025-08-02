
export const saveLink = (shortcode, url, validMinutes) => {
  const links = JSON.parse(localStorage.getItem("links")) || {}; 
  const createdAt = new Date().toISOString(); 
  const validUntil = Date.now() + validMinutes * 60 * 1000; 

  
  links[shortcode] = { url, createdAt, validUntil };
  localStorage.setItem("links", JSON.stringify(links)); 
};


export const getLinks = () => {
  return JSON.parse(localStorage.getItem("links")) || {}; 
};


export const log = (event, details) => {
  const logs = JSON.parse(localStorage.getItem("logs")) || []; 
  logs.push({ event, details, time: new Date().toISOString() }); 
  localStorage.setItem("logs", JSON.stringify(logs)); 
};
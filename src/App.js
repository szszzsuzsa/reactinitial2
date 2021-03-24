import "./App.css";
import React, {useState, useEffect} from "react";
import Clients from './components/Clients';


const App = () => {
  const [hotel, setHotels] = useState(null);
  const [showSub, setShowSub] = useState(null);
  const [response, setResponse] = useState(null);

  const url = "/api/clients?search=${input}";

  const getClient = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setClients(data);
    } catch (error) {
      setResponse(false);
    }
  };

  const subHandler = () => {
    setTimeout(function () {
      setShowSub(true)
    }, 5000)
  }

  useEffect(() => {
    getClient()
    subHandler()
  }, [])






  return (
    <div className="App">
      <h1>Veteranian admin-clients</h1>

      <div><input onClick={} ></input>
      <button></button></div>
      {client !== null ? client.map((client, index) => <Client key={index} client={client} />) :<LoadingMask />}
    
   
    </div>
  );
};

export default App;





<h1>Veteranian admin-clients</h1>
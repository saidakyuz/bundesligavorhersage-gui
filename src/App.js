import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Form from "./components/Form";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://app.sportdataapi.com/api/v1/soccer/teams?apikey=2b3c6600-3bb0-11ec-b3d3-4d61dc6ba6b2&country_id=48"
      )
      .then((response) => {
        setAllData(response.data.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <MyNavbar />
      <Form data={allData} />
    </div>
  );
}

export default App;

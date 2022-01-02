import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function Home({ authorized }) {
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/initiatives").then((response) => {
      setInitiatives(response.data);
    });
  }, []);

  if (authorized) {
    return (
      <div>
        {initiatives.map((val) => {
          return (
            <h3>
              Initative name: {val.init_name} | Description: {val.description}
              <button>Subscribe</button>
            </h3>
          );
        })}
      </div>
    );
  }
  return <Redirect to="/login" />;
}

export default Home;

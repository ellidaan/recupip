import React, { useEffect } from "react";
import axios from "axios";

function To() {
  useEffect(() => {
    async function fetchData() {
      await axios.get("https://ipp.onrender.com/");
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>To do list</h1>
    </div>
  );
}

export default To;

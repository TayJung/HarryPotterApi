import React, { useState, useEffect } from "react";
import axios from "axios";

const House = () => {
  const [data, setData] = useState();

  const url = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.house);
      })
      .catch((error) => {
        console.log(`erro na requisição da api ${error}`);
      });
  });

  return (
    <div>
      <>
        <h3>{data}</h3>
      </>
    </div>
  );
};
export default House;

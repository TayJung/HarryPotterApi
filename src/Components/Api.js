import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../Style/StyleApi";

export default function Api() {
  const [data, setData] = useState([]);

  const url = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(`erro na API ${error}`);
      });
  }, []);

  return (
    <S.ContainerMain>
      <S.BoxCards>
        {data.map((item, index) => (
          <S.Div key={index}>
            <S.BoxImage>
              <S.Image src={item.image} alt="" />
            </S.BoxImage>
            <S.BoxInfo>
              <S.LiInfo>{item.name}</S.LiInfo>
              <S.LiInfo>House {item.house}</S.LiInfo>
            </S.BoxInfo>
          </S.Div>
        ))}
      </S.BoxCards>
    </S.ContainerMain>
  );
}

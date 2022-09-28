import React from "react";
import * as S from "../Style/StyleHome.js";
import HarryP from "../assets/images/HarryPotterHome.png";
import Apple from "../assets/images/btnApple.png";
import GooglePlay from "../assets/images/btnPlaystory.png";
const Home = () => {
  return (
    <>
      <S.ContainerHome>
        <S.BoxHome>
          <S.Img src={HarryP} alt="" />
        </S.BoxHome>
      </S.ContainerHome>
      <S.ContainerGame>
        <S.TitleGame>Quer se divertir um pouco?!</S.TitleGame>
        <S.BoxGame>
          <a href="https://apps.apple.com/br/app/harry-potter-hogwarts-mystery/id1333256716">
            <S.BtnGame src={Apple} alt="" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.tinyco.potter&gl=us">
            <S.BtnGame src={GooglePlay} alt="" />
          </a>
        </S.BoxGame>
      </S.ContainerGame>
    </>
  );
};
export default Home;

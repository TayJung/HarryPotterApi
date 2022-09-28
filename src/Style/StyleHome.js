import Styled from "styled-components";
import BackgHome from "../assets/images/backgroundHome.png";
import Sombra from "../assets/images/sombrasHarry.png";

export const ContainerHome = Styled.section`
background-image: url(${BackgHome});
background-repeat:no-repeat;
background-size:100% 85vh;
background-color:#2B0000;
width:100%;
height:90vh;
display:flex;
justify-content:center;
align-items:flex-end;
`;

export const BoxHome = Styled.div`
background-image: url(${Sombra});
background-size:contain;
background-repeat:no-repeat;
background-position:center;
border:none;
width:50%;
height:80vh;
display:flex;
justify-content:center;
align-items:center;
animation: sumir 10s ease-in-out infinite;
@keyframes sumir {
 
    0% {
      filter:  opacity(0);
    }
   
    30% {
      filter: opacity(0.8);
    }
    50% {
      filter:  opacity(1);
    }
    80% {
      filter: opacity(0.8);
    }
  
    100% {
      filter: opacity(0);
    }
  
  }
  @media only screen and (min-width: 320px) and (max-width: 800px){
    
    height:30vh;
  }
`;

export const Img = Styled.img`
@media only screen and (min-width: 320px) and (max-width: 800px){
 
  width:30vh;
}
`;

export const ContainerGame = Styled.section`
display:none;
@media only screen and (min-width: 320px) and (max-width: 800px){
  background-color:#2B0000;
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  height:30vh;
}
`;

export const BoxGame = Styled.div`
 display:flex;
align-items:center;
justify-content:space-evenly;
width:100%;
height:35vh;
border
`;

export const BtnGame = Styled.img`
width:20vh;
`;

export const TitleGame = Styled.h3`
text-align:center;
color:#CA961B;
padding-top:1em;
`;

import Styled from "styled-components";
import BackgroundApi from "../assets/images/backgroundCards.png";

export const ContainerMain = Styled.section`
background-image: url('${BackgroundApi}');
background-color:#000;
background-repeat:no-repeat;
background-size:90vw 85vh;
background-position: center;
width:100%;
height:90vh;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
overflow:hidden;
`;

export const BoxCards = Styled.div`
width:69%;
height:64.5vh;
display:flex;
justify-content:space-evenly;
align-items:center;
overflow-Y:scroll;
flex-wrap:wrap;
gap:30px;
&::-webkit-scrollbar{
    width: 1vw;   
  }
  &::-webkit-scrollbar-track{
    background:#816035;
    border-radius:1em;
  }
  &::-webkit-scrollbar-thumb{
    height:10vh;
    background-color:#C0AD85;
    border-radius:1em;
    border:3px solid #C0AD85; 
  }
  @media only screen and (min-width: 320px) and (max-width: 800px){    
      justify-content:center;
      flex-wrap:none;
    }
`;

export const BoxImage = Styled.figure`
width:12vw;
height:27vh;
display:flex;
justify-content:center;
align-items:center;
@media only screen and (min-width: 320px) and (max-width: 800px){     
      width:50vw;
      height:50vh;
    }
`;

export const Image = Styled.img`
width:10vw;
height:25vh;
border-radius:0.5em;
outline-style:hidden;
cursor:pointer;
&:hover{
  width:10.5vw;
  height:25.5vh;
  border: double #8B0000 5px;
  box-shadow: 5px 5px 15px 5px rgba(35,35,35,0.92);
}
@media only screen and (min-width: 320px) and (max-width: 800px){    
      width:50vw;
      height:45vh;
      &:hover{
      width:50.5vw;
      height:45.5vh;     
    }
`;
export const Div = Styled.div`
 display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 320px) and (max-width: 800px){
   
  }
 
`;

export const BoxInfo = Styled.ul` 
  opacity:0;
  font-weight: 500;
  cursor:pointer;
  position:relative;
  top:-8vh;
  font-size:0.8em;
  text-align:center;
  width:9vw;
  height:7vh;
  border-radius: 0  0 0.5em 0.5em ;
  color:#CA961B;
  background:rgba(100,0,0,0.6);
  &:hover {    
    transform: scale(110%);   
    transition: ease-in-out 0.5s; 
    opacity:1;
    }
    @media only screen and (min-width: 320px) and (max-width: 800px){
      width:47vw;
      height:10vh;
      opacity:0;
      top:-13vh;
      font-size:0.7em;
      &:hover{
        transform: scale(105%);  
      }
    }
`;

export const LiInfo = Styled.li`
width:9vw;
height:2vh;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;
height:5vh;

}
`;

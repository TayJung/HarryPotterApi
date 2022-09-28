import Styled from "styled-components";
import BackgroundH from "../assets/images/harryPotterCastle.gif";
import { Link } from "react-router-dom";

export const BoxHeader = Styled.section`
width:100%;
height:15vh;
display: flex;
justify-content:space-around;
align-items:center;
background-image: url(${BackgroundH});
background-repeat:no-repeat;
background-size:100% 15vh;
`;

export const Logo = Styled.img`
width:8vw;
height:10vh;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:15vw;
}
`;

export const Harry = Styled.img`
width:20vw;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:25vw;
}
`;

export const BtnHeader = Styled.button`
background:none;
color:#CA961B;
border: none;
font-size:2em;
font-weight:700;
display:flex;
justify-content:start;
cursor:pointer;
font-family: 'Henny Penny', cursive;
@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:1em;
}
                                                
`;

export const Nav = Styled.nav`
display:flex;
flex-direction:column;
justify-content:center;
align-items:left;
text-align:left;
width:11vw;
height:10vh;
background:none;
border-radius:0.4em;
position:relative;
top:5vh;

`;
export const List = Styled.ul`
  display:flex;
  flex-direction:column;  
  align-items: start;
  justify-content:space-evenly;
  width:100%;
  height:20vh;
`;

export const Menu = Styled(Link)`    
    text-decoration:none;
    color:#CA961B;
    font-size:1.2em;
    font-weight:500;
    text-align:left;
    font-size:0.6em;
    text-shadow: 5px 4px 6px rgba(0,0,0,0.6);
    padding-left:0.5em;
    
  
  `;

export const Li = Styled.li`
   display:flex;
   align-items:center;
   height:5vh;
   width:100%;
   border-radius:0.1em;
    &:hover{
      background:rgba(100,0,0,0.6);
    }
  `;

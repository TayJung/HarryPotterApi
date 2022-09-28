import Styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: 'Henny Penny', cursive;
                                                
    }
 `;

export const Container = Styled.body`
 width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;  
  font-family: 'Henny Penny', cursive;
                                                
                                                
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: poppins;
 }
 body::-webkit-scrollbar-thumb,
 ::-webkit-scrollbar{
        display: none;
}

a{
    text-decoration: none;
}
.CartPage_cartContainer{
    display: flex;
}
.cartPage_carts {
    display: flex;
    flex-wrap: wrap;
    width: 77vw;
}
.cartAside{
    position: fixed;
    right: 13vw;
    padding: 20px;
}
.cart{
    min-width: 250px;
    width: 27vw;
}
.limegreen{
    color: green;
    font-weight: 400;
    font-size: 1rem;
}
`;

export default GlobalStyle;

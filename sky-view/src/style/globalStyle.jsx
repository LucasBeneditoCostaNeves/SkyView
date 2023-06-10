import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import searchIcon from "../assents/search.svg.png";
export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: 'Lilita One', cursive;
    text-transform: capitalize;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html.yellow {
    background-color: var(--main-color);
  }

html.login {
    background-color: var(--main-color);
}

.loading{
    background-color: #121111;
}

.dia{
    background-color: #71D787;
    
    .img{
        max-width: 350px;
    }
    @media(min-width: 400px){
        .img{
            width: 80%;
        }
    }
    @media(min-width: 520px){
   .img{
   width: 60%;
    }
}

    @media(min-width: 690px){
    .img{
      width: 50%;
    }
}
}


.chuva{
    background-color: #A4E4E8;
    .img{
        max-width: 350px;
    }
    @media(min-width: 400px){
    .img{
       width: 60%;
    }
    }

    @media(min-width: 1000px){
    .img{
       width: 50%;
    }
    }
}

.nevasca{
    .img{
        max-width: 500px;
    }
}

.noiteNublada{
    background-color: #0D2563;
    color: white;
    
    .img{
        height: 301px;
        max-width: 500px;
    }

    @media(min-width: 500px){
        .img{
            margin-top: 40px;
        }
    }
}

.finalDeTarde{
    background-color: #825CB1;
    color: white;
    .img{
        max-width: 400px;
    }

    @media(min-width: 550px){
        .img{
            margin-top: 30px;
        }
    }
}

.neblina{
    background-color: #919AB2;
    color: white;
    .img{
        height: 300px;
    }

    @media(min-width: 500px){
        .img{
            margin-top: 30px;
        }
    }
}


h1{
    font-size: 45px;
    margin-top: 10px;
}

h3{
    font-size: 38px;
    margin-top: 5px;
}

form{
    display: flex;
    margin: 0 auto;
    width: max-content;
    margin-top: 15px;
}

input{
    margin-right:10px;
    border-radius: 4px;
}

button{
    width: max-content;
    border: none;
    border-radius: 4px;
    color: white;
    background-color: #00BBF6;
    background-image: url(${searchIcon});
    color: white;
    cursor: pointer;
}

.flag{
    display: flex;
    align-items: center;
    margin: 10px auto 0px;
    width: max-content;
}

.img-flag{
    width: 45px;
    height: 40px;
    margin-left: 20px;
}

.noite{
    background-color: #181E3C;
    color: white;
    .img{
        max-width: 450px;
    }
}

:root{
    --main-color:#FEE440;
    
    --gray-1: #2E2E2E;
    --gray-0: #212529;
    --gray-2: #495057;
    --gray-3: #868E96;
    --gray-4: #ADB5BD;
    --gray-5: #CED4DA;
    --gray-6: #DEE2E6;
    --gray-7: #E9ECEF;
    --gray-8: #F1F3F5;
    --gray-9: #F8F9FA;
    --gray-10:#FDFDFD;
    --gray-50: #EDEAFD;
    --gray-25: #B0A6F0;
 }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    background:  #f2f2f2;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 62.5%;
    max-width:100%;

  }
  h6 {
    color: #2ccc7e;
    font-size: 22px;
}
h6:first-child {
    color: #2ccc7e;
    margin-bottom: -2rem;

}
h3{
  text-align: center;
}
.u-svg-content {
    background-color: white;
    fill: #2ccc7e;
    border-radius: 5rem;
    padding: 1rem;
    width: 7rem;
    height: 7rem;

}
.one,
.three,
.six,
.eight {
    background-color: white;
}
.four,
.five {
    background-color: #2ccc7e;
}
.lightfont{
  font-weight: 100;
  line-height:5rem;
}
.fntgreen{
  color:#2ccc7e;
}
.green{
background-color:#2ccc7e;
color:white;
font-size: 2rem;
}
.elder{
  width: 23rem;

@media(max-width:1025px) {
    width:80%
}
@media(max-width:820px){
    width:80%
}
}
.mid{
  
}
.namebox,.emailbox, .emailbx, .namebx, .inputboxbtn{
  @media (max-width: 820px){
    width:95%;
  }
}
.linktext:hover{
color:#2ccc7e;
}


.overviewul h1 {
  background-color: #2ccc7e;
  padding: 2rem 3rem;
  color: white;
  margin-bottom: 0;
  letter-spacing: 3px;
  font-family: Montserrat, sans-serif !important;
}

.overview p:nth-child(3) {
  font-size: 1.7rem;
}

.overview p:first-of-type {
  color: #2ccc7e;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.87rem;
}

.founder,
.mission {
  font-size: 1rem;
}

.founder p,
.mission p {
  font-size: 1.75rem !important;
}

.mission button {
  padding: 1.4rem 3rem;
  width: 19em;
  font-size: 1.5rem;
  background-color: #478ac9;
  color: white;
  border: none;
}

.mission button:hover {
  background-color: #259bca;
}
.fa-x{
  font-size: 3rem;
    position: absolute;
    right: 0;
    margin: 1rem;
}

`;

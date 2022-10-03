import React, { useState } from 'react'
import styled from "styled-components"

export const OverviewContStle = styled.div`
background-color: #f2f2f2;
display: flex;
padding: 30px 50px;
align-items: center;
justify-content: center;
flex-direction: column;


@media(max-width:540px){
    padding: 30px 0px;
}
@media(max-width:420px){
    padding: 30px 0px;
}
`

export const OverviewCont = styled.div`
width: 85%;
display: flex;
background-color: #f2f2f2;
justify-content: center;
flex-direction: column;
margin-top: 3rem;


@media (max-width: 820px){
    width: 80%;
}
@media (max-width: 420px) {
    width: 95%;
}
`
export const OverviewUl = styled.div`
display: flex;
font-size: 1.2rem;
list-style-type: none;
column-gap: 6rem;
flex-wrap: wrap;
h1 {
  background-color: #2ccc7e;
  padding: 2rem 3rem;
  color: white;
  margin-bottom: 0;
  letter-spacing: 3px;
  font-family: Montserrat, sans-serif !important;
}
@media (max-width: 740px){
    column-gap: 1rem;
}
@media (max-width: 500px){
    flex-direction: column;
}
@media (max-width: 420px){
    width: 30%;
}
`

export const TxtChng = styled.div`
font-size: 1.4rem;
background-color: white;
padding: 2rem 2rem 5rem 2rem;
display: flex;
flex-direction: column;
row-gap: 1rem;
column-gap: 1rem;
margin-bottom: 4rem;
`
export const BoxOverview = styled.div`
font-size: 1.4rem;
background-color: white;
padding: 2rem 2rem 5rem 2rem;
display: flex;
flex-direction: column;
row-gap: 1rem;
column-gap: 1rem;
margin-bottom: 4rem;
p:first-of-type {
  color: #2ccc7e;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.87rem;
}
p:nth-child(3) {
  font-size: 1.7rem;
}


`
export const BoxFounder = styled.div`
font-size: 1.4rem;
background-color: white;
padding: 2rem 2rem 5rem 2rem;
display: flex;
flex-direction: column;
row-gap: 1rem;
column-gap: 1rem;
margin-bottom: 4rem;

p{
    font-size: 1.75rem !important;
}


`
export const BoxMission = styled.div`
font-size: 1.4rem;
background-color: white;
padding: 2rem 2rem 5rem 2rem;
display: flex;
flex-direction: column;
row-gap: 1rem;
column-gap: 1rem;
margin-bottom: 4rem;

button{
padding: 1.4rem 3rem;
  width: 19em;
  font-size: 1.5rem;
  background-color: #478ac9;
  color: white;
  border: none;
}
p{
    font-size: 1.75rem !important;
}
button:hover {
  background-color: #259bca;
}
`
const Heading = styled.h1`


`

function Overview() {

    return (
        <BoxOverview className="overview" id="overview">
            <h1>Brave is an innovative web solution, which combines captivating design <br /> and flawless
                functionality in a multipurpose HTML template.</h1>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.
                Duis <br /> aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla
                pariatur.</p>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.
                Duis aute <br />irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla
                pariatur.</p>
        </BoxOverview>
    )
}
function Founder() {

    return (
        <BoxFounder className="founder">
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.
                Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
            </p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat
                nulla
                pariatur.</p>
        </BoxFounder>
    )
}
function Mission() {

    return (
        <BoxMission className="mission" >
            <h1>Be The First To Review This Product!</h1>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.
            </p>
            <button>WRITE PRODUCT REVIEW</button>
        </BoxMission>)
}


function OverviewContainer() {
    const [fonts, setfonts] = useState("");
    const [background, setbackground] = useState("")
    const [content, setContent] = useState("FirstCard")

    return (
        <OverviewContStle>
            <OverviewCont>
                <OverviewUl className="overviewul">
                    <Heading onClick={() => setContent("FirstCard")}>OVERVIEW</Heading>
                    <Heading onClick={() => setContent("SecondCard")}>FOUNDER</Heading>
                    <Heading onClick={() => setContent("ThirdCard")}>MISSION</Heading>
                </OverviewUl>
                <TxtChng className="mainbox">
                    {content === "FirstCard" && <Overview />}
                    {content === "SecondCard" && <Founder />}
                    {content === "ThirdCard" && <Mission />}
                </TxtChng>
            </OverviewCont>
        </OverviewContStle>
    )

}
export default OverviewContainer;






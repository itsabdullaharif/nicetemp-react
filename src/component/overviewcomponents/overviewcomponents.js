import React, { useState } from 'react'
import styled from "styled-components"



export const Overviewcont = styled.div`
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
export const Overviewul = styled.div`
display: flex;
font-size: 1.2rem;
list-style-type: none;
column-gap: 6rem;
flex-wrap: wrap;
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

export const Txtchng = styled.div`
font-size: 1.4rem;
background-color: white;
padding: 2rem 2rem 5rem 2rem;
display: flex;
flex-direction: column;
row-gap: 1rem;
column-gap: 1rem;
margin-bottom: 4rem;
`
export const Boxov = styled.div`
font-size: 1.4rem;
background-color: white;
padding: 2rem 2rem 5rem 2rem;
display: flex;
flex-direction: column;
row-gap: 1rem;
column-gap: 1rem;
margin-bottom: 4rem;



`
export const Boxfr = styled.div`
font-size: 1.4rem;
background-color: white;
padding: 2rem 2rem 5rem 2rem;
display: flex;
flex-direction: column;
row-gap: 1rem;
column-gap: 1rem;
margin-bottom: 4rem;



`
export const Boxmn = styled.div`
font-size: 1.4rem;
background-color: white;
padding: 2rem 2rem 5rem 2rem;
display: flex;
flex-direction: column;
row-gap: 1rem;
column-gap: 1rem;
margin-bottom: 4rem;



`
const Heading = styled.h1`


`

function Overview() {

    return (
        <Boxov className="overview" id="overview">
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
        </Boxov>
    )
}
function Founder() {

    return (
        <Boxfr className="founder">
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
        </Boxfr>
    )
}
function Mission() {

    return (
        <Boxmn className="mission" >
            <h1>Be The First To Review This Product!</h1>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.
            </p>
            <button>WRITE PRODUCT REVIEW</button>
        </Boxmn>)
}


function App() {
    const [fonts, setfonts] = useState("");
    const [background, setbackground] = useState("")
    const [content, setContent] = useState("FirstCard")

    return (
        <>

            <Overviewcont>
                <Overviewul className="overviewul">
                    <Heading className={background ? "color" : "nocolor"} onClick={() => setContent("FirstCard")}>OVERVIEW</Heading>
                    <Heading className={background ? "color" : "nocolor"} onClick={() => setContent("SecondCard")}>FOUNDER</Heading>
                    <Heading className={background ? "color" : "nocolor"} onClick={() => setContent("ThirdCard")}>MISSION</Heading>
                </Overviewul>
                <Txtchng className="mainbox">
                    {content === "FirstCard" && <Overview />}
                    {content === "SecondCard" && <Founder />}
                    {content === "ThirdCard" && <Mission />}
                </Txtchng>
            </Overviewcont>
        </>
    )

}
export default App;



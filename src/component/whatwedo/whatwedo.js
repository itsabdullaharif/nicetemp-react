import styled from "styled-components"

export const WhatWedoContStle = styled.div`
background-color: white;
display: flex;
padding: 30px 0px;
align-items: center;
justify-content: center;
flex-direction: column;
h1 {
    color: #2ccc7e;
    font-size: 2.8rem;
    display: block;
}
h1:first-child {
    color: #2ccc7e;
    

}

@media(max-width:540px){
        padding: 30px 0px;
}
@media(max-width:420px){
        padding: 30px 0px;
}
`


export const WhatWedoStyle = styled.div`
display: flex;
justify-content: center;
font-size: 1.4rem;
column-gap: 5rem;
padding: 5rem 50px;
flex-wrap: wrap;
background-color: white;
.elder{
  width: 23rem;

@media(max-width:1025px) {
    width:80%
}
@media(max-width:820px){
    width:80%
}
}

@media (max-width: 1025px) {
    padding-left: 11rem;
    justify-content: unset;
}
@media (max-width: 420px){
    padding: 12rem 0rem;
    justify-content: center;
}
`
export const Background = styled.div`
width: 18rem;
/* height: 23rem; */
font-size: 1.7rem;
padding: 1rem 3rem ;
@media (max-width: 1025px) {
    width: 35%;
}
@media (max-width: 820px){
    width: 80%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}


`
export const Color = styled.div`
width: 18rem;
height: 23rem;
font-size: 1.7rem;
padding: 3rem;
background-color:#f2f2f2;
@media (max-width: 1025px) {
    width: 35%;
}
@media (max-width: 820px){
    width: 80%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
@media (max-width: 420px){
padding: 5rem 3rem 3rem 3rem;
}


`



function WhatWedo() {
    return (
        <WhatWedoContStle>
            <WhatWedoStyle>
                <Background className="elder">
                    <h1>What I Do</h1>
                    <p>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse
                        rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien.</p>
                </Background>
                <Background>
                    <div>
                        <h1>01.</h1>
                        <h2>Web Design</h2>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </Background>
                <Color>
                    <h1>02. </h1>
                    <h2>Print</h2>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </Color>
                <Background className="workintrobox">
                    <h1>03.</h1>
                    <h2>Illustration</h2>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </Background>
            </WhatWedoStyle>
        </WhatWedoContStle>
    )
}
export default WhatWedo;





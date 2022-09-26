import styled from "styled-components";



export const Inputcontainer = styled.div`
width: 85%;
align-items: center;
font-size: 1.7rem;
background-color: white;
border-radius: 2rem;
padding: 3rem 4rem;
font-style: 'Open Sans', sans-serif;

// @media (max-width: 1319px) {
//     display: unset;
//     padding: 5rem 2rem;
// }
@media (max-width: 920px) {
    width: 94%;
}
media (max-width: 820px) {
    height: 42rem;
    width: 80%;
}
@media (max-width: 740px) {
    flex-direction: column;
}
@media (max-width: 420px){
    width: 85%;
    height:unset;
}
`

export const Textinputwrap = styled.div`
display: flex;
justify-content: space-between;

@media (max-width: 1319px) {
    flex-direction: column-reverse;
}

`
export const Inputsmptxt = styled.div`
color: #999999;
`
export const Inputbox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-evenly;
width: 65%;
column-gap: 2rem;

background-color: #f2f2f2;
padding: 1.5rem;
border-radius: 3.2rem;

@media (max-width: 1025px) {
    width: 95%;
}
@media (max-width: 920px) {
    width: 97%;
}
@media (max-width: 820px)
 {
    flex-direction: column;
    height: 15em;
}
@media (max-width: 740px)
 {
    height: 15em;
    flex-direction: column;
}
@media (max-width: 420px){
width: 100%;
padding: unset;
display:flex;
row-gap:1rem;
justify-content:center;
}



`
export const Namebx = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 420px) {
    width: 90%;
}
`
export const Emailbx = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 420px) {
    width: 90%;
}


`
export const Namebox = styled.input`
height: 2.1em;
border: none;
border-radius: 4rem;
font-size: 1.7rem;
padding: 1rem 1rem;
@media (max-width: 420px) {
    width: 90%;
}

`
export const Emailbox = styled.input`
height: 2.1em;
border: none;
border-radius: 4rem;
font-size: 1.7rem;
padding: 1rem 1rem;
@media (max-width: 420px) {
    width: 90%;
}
`
export const Inputboxbtn = styled.button`
font-size: 1.6rem;
background-color: #2ccc7e;
padding: 1.7rem 4rem;
border: none;
border-radius: 4rem;
color: white;
text-align: center;
@media (max-width: 420px) {
    width: 90%;
   
}
`



function Advicecomponents() {
    return (
        <Inputcontainer>
            <h1>Get Free Advice</h1>
            <Textinputwrap>
                <Inputsmptxt>Sample text. Click to select the text box. <br /> Click again or double click to
                    start
                    <br /> editing the
                    text.
                </Inputsmptxt>
                <Inputbox>
                    <Namebx className="namebx">
                        <h5>Name</h5><Namebox type="text" placeholder="Enter your name" className="namebox" />
                    </Namebx>
                    <Emailbx className="emailbx">
                        <h5>Email</h5>
                        <Emailbox type="email" placeholder="Enter a valid email address" className="emailbox" />
                    </Emailbx>
                    <Inputboxbtn className="inputboxbtn">Submit</Inputboxbtn>
                </Inputbox>
            </Textinputwrap>


        </Inputcontainer>

    )
}
export default Advicecomponents;
import styled from "styled-components";
import scicon from "../../assests/scicon.png"
export const Contacttext = styled.div`
width: 35%;
background-color: white;
font-size: 1.6rem;
@media (max-width: 1025px){
    width: 35%;
}
@media (max-width: 920px){
    width: 40%;
}
@media (max-width: 820px) {
    width: 50%;
}
@media (max-width: 420px)
 {
    width: 95%;
}






`
export const Signupcont = styled.div`
font-size: 1.7rem;
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
background-color: #f2f2f2;
padding: 3rem;
font-family: Roboto, sans-serif;

@media (max-width: 500px){
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media (max-width: 420px) {
    width: 87%;
    align-items: unset;
}


`
export const Signupdiv = styled.div`

`
export const Signupinput = styled.input`
width: 60%;
height:3.5rem;
padding: 1rem;
border:none;
margin-bottom: 2rem;
`
export const Signupbtn = styled.button`

    width: 25%;
    height:4.7rem;
    text-align: center;
    background-color: #2ccc7e;
    outline: none;
    border: none;
    color: white;
    font-weight: 600;
`
export const Scicon = styled.img`
width:13rem;
`



function Contactsignup() {
    return (

        <>
            <Contacttext>
                <h1>Contact Us</h1>
                <h2 className="lightfont">New York, 4140 Parker Rd. Allentown,<br />
                    New Mexico 31134</h2>
                <h1 className="fntgreen">+1 (555) 656 77 89</h1>
                <h1>info@sample.com</h1>
            </Contacttext>



            <Signupcont>
                <h1>Sign me up!</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum. </p>
                <Signupdiv>
                    <Signupinput type="text" placeholder="Enter your name" />
                    <Signupbtn type="submit" id="signupbtn">SUBMIT</Signupbtn>
                </Signupdiv>
                <Scicon src={scicon} />
            </Signupcont>
        </>
    )
}
export default Contactsignup;
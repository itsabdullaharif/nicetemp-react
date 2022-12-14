import styled from "styled-components"
import img1 from "../../assests/img-1.jpeg"
import menu from "../../assests/menu.png"
import call from "../../assests/call.png"
import "../Navbar/Navbar.css"


export const LandPgCont = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
font-size: 2.5rem;
column-gap: 3rem;
background-color: white;
font-family: 'Open Sans', sans-serif;
padding: 50px 130px;
.lightfont{
  font-weight: 100;
  line-height:5rem;
}
.fntgreen{
  color:#2ccc7e;
}
@media(max-width:1025px){
    padding: 50px 82px;
}
@media(max-width:820px) {
justify-content: center;
 padding: 1rem 0;
align-items: center;
flex-direction: column;
}
`
export const LandpgContText = styled.div`
width:60%;
@media(max-width: 820px) {
width: 70%;
}
@media (max-width: 500px) {
    width: 90%;
}


`
export const LandPgHead = styled.div`
line-height:2rem;
font-family: 'Montserrat', sans-serif;

`
export const Aboutusimage = styled.img`
width: 60%;
height: 65rem;
@media (max-width: 820px){
    width: 80%;
}
@media (max-width: 420px) {
    width: 95%;
}
`
export const LandText = styled.p`
font-family: 'Open Sans',sans-serif;
color: #111111;
font-size: 1.8rem;
width:100%
`
export const LinkText = styled.a`
list-style: none;
text-decoration: none;
color: black;
font-size: 3.4rem;
margin-left:-1rem;
font-family: 'Montserrat', sans-serif;
font-weight:700;
:hover{
color:#2ccc7e;

}


`


export const Call = styled.img`
width:5rem;
margin-bottom:-1rem;
`
function LandingPage() {



    return (
        <>

            <LandPgCont>
                <LandpgContText>
                    <h5 className="fntgreen">WHAT WE DO</h5>
                    <LandPgHead>
                        <h1>360° business </h1>
                        <h1> consulting</h1>
                        <h1 className="lightfont"> Can you afford us?</h1>
                    </LandPgHead>
                    <LandText>Whether your company looks for a financial consulting, investment <br /> risks assessments or an interim,
                        HR management, we’re ready to <br />
                        provide that for you.</LandText>
                    <span> <LinkText href="" className="linktext"><Call src={call} />+1 (234) 567-8910
                    </LinkText></span>
                </LandpgContText>
                <Aboutusimage src={img1} />
            </LandPgCont>
        </>
    )
}
export default LandingPage;
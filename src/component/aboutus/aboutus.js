import styled from "styled-components";
import aboutusiamge from "../../assests/aboutusimage.jpeg"






export const AboutUsContainerStle = styled.div`
display: flex;
flex-direction: row;
font-size: 1.8rem;
justify-content: center;
background-color: white;
padding: 3rem 0;
@media (max-width: 820px) {
flex-direction: column;
align-items: center;
justify-content: center;
}
@media (max-width: 740px){
flex-direction: column;
justify-content: center;
align-items: center;
}
`
export const AboutUsText = styled.div`
width: 40%;
margin-bottom: 4rem;
line-height: 3.8rem;
line-break: auto;
letter-spacing: .3px;
padding: 0 4rem;
@media (max-width: 820px){
    width: 70%;
}
@media (max-width: 740px){
    width: 80%;
}
@media (max-width: 420px) {
    width: 90%;
}



`
export const ListItem = styled.div`
margin-bottom: 1rem;
font-weight: 100;
span {
    color: #2ccc7e;
}

`


export const AboutUsImage = styled.div`
width: 40%;

@media (max-width: 820px) {
    width: unset;
}

@media (max-width: 740px){
    width: 80%;
}
@media (max-width: 420px) {
    width: 95%;
    height: 50rem;
}




`

export const ImgAboutUs = styled.img`
width:100%;
height:55rem;

@media (max-width: 820px) {
    width: 70vw;
}
@media (max-width: 740px){
    width: 80%;
}
@media (max-width: 541px){
    width: 100%;
}
@media (max-width: 420px) {
    width: 95%;
    height: 50rem;}
`
export const AboutUsComonentsCont = styled.div`
display: flex;
flex-direction: row;
font-size: 1.8rem;
justify-content: center;
background-color: white;
padding: 3rem 0;
@media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
    @media (max-width: 740px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`
export const StrgBtn = styled.button`
color: white;
background-color: #2ccc7e;
border-radius: 3rem;
border: none;
padding: 1.5rem 7rem;
margin-top: 1rem;
font-weight: 800;
height: 5rem;
:hover{
    opacity: .3;
    color: black;


}
`


function AboutUsComponents() {
    return (
        <AboutUsContainerStle>
            <AboutUsComonentsCont>
                <AboutUsText>
                    <h6>ABOUT US</h6>
                    <h1>IT Solution Strategy <br /> Development For Your<br />Bussiness</h1>
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can
                        manor
                        smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed
                        but
                        wishes. You day real less till dear read.</p>
                    <ListItem>
                        <span> ► </span>
                        Support via E-mail and Phone
                    </ListItem>

                    <ListItem>
                        <span> ► </span>
                        Multi-Language Support
                    </ListItem>
                    <StrgBtn type="button">Read More</StrgBtn>
                </AboutUsText>


                <AboutUsImage><ImgAboutUs src={aboutusiamge} /></AboutUsImage>

            </AboutUsComonentsCont>
        </AboutUsContainerStle>
    )
}
export default AboutUsComponents;







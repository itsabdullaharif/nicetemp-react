import styled from "styled-components"
import designimg from "../../assests/designportrait.jpeg"
import designimg1 from "../../assests/designportrait2.jpeg"
import design2 from "../../assests/designportrait3.jpeg"
import design3 from "../../assests/mid.png"

export const DesignContainerStle = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
background-color: #f2f2f2;
font-size: 1.8rem;
text-align: center;
@media (max-width: 420px) {
    padding: 3rem 0rem;
}


`

export const DesignFlex = styled.div`
@media (max-width: 540px){
    width: 100%;
}
`
export const DesignPortrait = styled.img`
width: 28rem;

@media (max-width: 820px){
    width: 60rem;
    height: 65rem;
}



`
export const Mid = styled.img`
width: 25rem;
background-color:#2ccc7e;


`
export const DesignboxMid = styled.div`
width: 28rem;
height: 34rem;
background-color:#2ccc7e;
display:flex;
justify-content:center;
align-items:center;

@media (max-width: 820px){
    width: 60rem;
    height: unset;
}
`

export const DesignBoxCenter = styled.div`
width: 28rem;
height: 34rem;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
padding: 0 2rem;

@media (max-width: 820px){
    width: 60rem;
    height: unset;
}
`
export const DesignBoxLeft = styled.div`
width: 28rem;
height: 34rem;
display:flex;
justify-content:center;
align-items:center;
text-align:left;
padding: 0 2rem;

@media (max-width: 820px){
    width: 60rem;
    height: unset;
}
`
export const DesignBox = styled.div`

width: 28rem;
height: 34rem;
display: flex;
overflow: hidden;
flex - direction: column;
align - items: center;
justify - content: center;
background - color: white;
margin: 0 1rem 1rem 1rem;

@media(max-width: 820px) {
    width: 60rem;
    height: 65rem;
}
@media(max-width: 420px) {
    height: 45rem;
    width:100%
}

`
function DesignComponents() {
    return (
        <DesignContainerStle>
            <DesignFlex>
                <h1 id="designtext">We design People Inspired <br /> Experiences that create positive <br /> change in people's
                    lives.</h1>

                <DesignContainerStle>
                    <DesignBox> <DesignPortrait src={designimg} className="designportrait" /></DesignBox>
                    <DesignBoxCenter>
                        <h1>Construction <br /> innovation</h1>
                    </DesignBoxCenter>
                    <DesignBoxLeft>
                        <p>The result of our company branding process is a comprehensive brand guideline that can be used to
                            design
                            a marketing website and other design assets like brand illustrations that reflect the new brand.
                        </p>
                    </DesignBoxLeft>
                    <DesignBox><DesignPortrait src={designimg1} className="height" /></DesignBox>
                    <DesignBox><DesignPortrait src={design2} className="" /></DesignBox>
                    <DesignboxMid><Mid src={design3} className="mid" /></DesignboxMid>
                </DesignContainerStle>
            </DesignFlex>
        </DesignContainerStle>

    )
}
export default DesignComponents;













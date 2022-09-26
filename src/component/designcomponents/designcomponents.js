import styled from "styled-components"
import designimg from "../../assests/designportrait.jpeg"
import designimg1 from "../../assests/designportrait2.jpeg"
import design2 from "../../assests/designportrait3.jpeg"
import design3 from "../../assests/mid.png"

export const Designcontainerstle = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
@media (max-width: 740px) {
    column-gap: 1rem;
}


`

export const Designflex = styled.div`
@media (max-width: 540px){
    width: 100%;
}
`
export const Designportrait = styled.img`
width: 28rem;

@media (max-width: 1025px){
   


@media (max-width: 820px){
    width: 60rem;
    height: 65rem;
}


}

`
export const Mid = styled.img`
width: 25rem;
background-color:#2ccc7e;


`
export const Designboxmid = styled.div`
width: 28rem;
height: 34rem;
background-color:#2ccc7e;
display:flex;
justify-content:center;
align-items:center;

@media (max-width: 1025px) {
   
}
@media (max-width: 820px){
    width: 60rem;
    height: unset;
}
`

export const Designboxcenter = styled.div`
width: 28rem;
height: 34rem;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
padding: 0 2rem;
@media (max-width: 1025px) {
   
}
@media (max-width: 820px){
    width: 60rem;
    height: unset;
}
`
export const Designboxleft = styled.div`
width: 28rem;
height: 34rem;
display:flex;
justify-content:center;
align-items:center;
text-align:left;
padding: 0 2rem;
@media (max-width: 1025px) {

}
@media (max-width: 820px){
    width: 60rem;
    height: unset;
}
`
export const Designbox = styled.div`

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
function Designcomponents() {
    return (

        <Designflex>
            <h1 id="designtext">We design People Inspired <br /> Experiences that create positive <br /> change in people's
                lives.</h1>

            <Designcontainerstle>
                <Designbox> <Designportrait src={designimg} className="designportrait" /></Designbox>
                <Designboxcenter>
                    <h1>Construction <br /> innovation</h1>
                </Designboxcenter>
                <Designboxleft>
                    <p>The result of our company branding process is a comprehensive brand guideline that can be used to
                        design
                        a marketing website and other design assets like brand illustrations that reflect the new brand.
                    </p>
                </Designboxleft>
                <Designbox><Designportrait src={designimg1} className="height" /></Designbox>
                <Designbox><Designportrait src={design2} className="" /></Designbox>
                <Designboxmid><Mid src={design3} className="mid" /></Designboxmid>
            </Designcontainerstle>
        </Designflex>


    )
}
export default Designcomponents;
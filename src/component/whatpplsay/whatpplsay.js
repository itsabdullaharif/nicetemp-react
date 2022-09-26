import styled from "styled-components"
import coma from "../../assests/coma.png"

export const Whatpplsaystyle = styled.div`
width: 74%;
padding-left: 15rem;
background-color: #f2f2f2;
font-size: 2rem;
display: flex;
flex-direction: column;
margin-bottom: 5rem;
@media (max-width: 920px){
    width: unset;
    padding: 0 5rem 0 4rem;
}

`
export const Whatpplsaytextstyle = styled.div`
background-color: white;
font-size: 2rem;
padding: 8rem 3rem;
font-size: 2.5rem;
font-weight: 100;
line-height: 4rem;
@media (max-width: 820px){
    width: 80%;
}
@media (max-width: 420px){
    width: 100%;
}
`

export const Comabox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 2.4rem;
background-color: #2ccc7e;


@media (max-width: 820px) {
    width: 80%;
}

@media (max-width: 420px){
    width: 100%;
    height: 15rem;
}
`
export const Opininonflex = styled.div`
display:flex;
flex-direction:row;
@media (max-width: 820px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media (max-width: 420px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`
export const Coma = styled.img`
background-color: white;
fill: #2ccc7e;
border-radius: 5rem;
padding: 1rem;
width: 7rem;
height: 7rem;

`



function Whatpplsay() {
    return (
        <Whatpplsaystyle>
            <h1>What People Say</h1>
            <Opininonflex>

                <Whatpplsaytextstyle>
                    Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can
                    manor
                    smart
                    money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but
                    wishes.
                    You
                    day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh
                    feel if
                    up
                    to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer.
                    In
                    surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing.
                </Whatpplsaytextstyle>
                <Comabox>
                    <Coma src={coma} />
                </Comabox>
            </Opininonflex>
        </Whatpplsaystyle>



    )
}
export default Whatpplsay;
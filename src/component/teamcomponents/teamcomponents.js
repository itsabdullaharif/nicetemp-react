import styled from "styled-components";
import t1 from "../../assests/t1.jpeg"
import t2 from "../../assests/t2.jpeg"
import t3 from "../../assests/t3.jpeg"
import t4 from "../../assests/t4.jpeg"
import t5 from "../../assests/t5.jpg"
import t6 from "../../assests/t6.jpeg"
import t7 from "../../assests/t7.jpeg"
import t8 from "../../assests/t8.jpeg"

export const Teamboxflex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;


`
export const Teambox = styled.div`
text-align: center;
background-color: #f2f2f2;
object-fit: cover;
margin: 1rem 1rem;
width: 31rem;


`
export const Teamimg = styled.div`
margin: 0 auto;
padding: 2rem;
`
export const Imgteam = styled.img`
border-radius: 15rem;
width: 150px;
height: 150px;
`


function Teamcomponents() {
    return (
        <Teamboxflex>
            <Teambox className="one">
                <Teamimg>
                    <Imgteam src={t1} />
                </Teamimg>
                <h1>ADAM JONSON</h1>
                <h3>Developer</h3>
            </Teambox>
            <Teambox className="two">
                <Teamimg>
                    <Imgteam src={t2} />
                </Teamimg>
                <h1>LINDA LARSON</h1>
                <h3>Manager</h3>
            </Teambox>
            <Teambox className=" three">
                <Teamimg>
                    <Imgteam src={t3} />
                </Teamimg>
                <h1>MARRY HUDSON
                </h1>
                <h3>Designer</h3>
            </Teambox>
            <Teambox className="four">
                <Teamimg>
                    <Imgteam src={t4} />
                </Teamimg>
                <h1>GAMES LARSON</h1>
                <h3>Designer</h3>
            </Teambox>
            <Teambox className="five">
                <Teamimg>
                    <Imgteam src={t5} />
                </Teamimg>
                <h1>PAUL PERRY
                </h1>
                <h3>Developer</h3>
            </Teambox>
            <Teambox className="six">
                <Teamimg>
                    <Imgteam src={t6} />
                </Teamimg>
                <h1>LOO SCAVO
                </h1>
                <h3>Designer</h3>
            </Teambox>
            <Teambox className="teambox seven">
                <Teamimg>
                    <Imgteam src={t7} />
                </Teamimg>
                <h1>MIA BEAUFORT
                </h1>
                <h3>Developer</h3>
            </Teambox>
            <Teambox className="eight">
                <Teamimg>
                    <Imgteam src={t8} />
                </Teamimg>
                <h1>JESS PERRY
                </h1>
                <h3>Developer</h3>
            </Teambox>
        </Teamboxflex>


    )
}
export default Teamcomponents;
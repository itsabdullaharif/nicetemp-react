import styled from "styled-components";
import t1 from "../../assests/t1.jpeg"
import t2 from "../../assests/t2.jpeg"
import t3 from "../../assests/t3.jpeg"
import t4 from "../../assests/t4.jpeg"
import t5 from "../../assests/t5.jpg"
import t6 from "../../assests/t6.jpeg"
import t7 from "../../assests/t7.jpeg"
import t8 from "../../assests/t8.jpeg"





export const TeamContainerStle = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: white;
font-size: 1rem;
padding: 4rem 5rem;
margin-bottom: 3rem;
.one,
.three,
.six,
.eight {
    background-color: white;
}
.four,
.five {
    background-color: #2ccc7e;
}
`
export const TeamBoxFlex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;


`
export const TeamBox = styled.div`
text-align: center;
background-color: #f2f2f2;
object-fit: cover;
margin: 1rem 1rem;
width: 31rem;


`
export const TeamImg = styled.div`
margin: 0 auto;
padding: 2rem;
`
export const Imgteam = styled.img`
border-radius: 15rem;
width: 150px;
height: 150px;
`


function TeamComponents() {
    return (
        <TeamContainerStle>
            <TeamBoxFlex>
                <TeamBox className="one">
                    <TeamImg>
                        <Imgteam src={t1} />
                    </TeamImg>
                    <h1>ADAM JONSON</h1>
                    <h3>Developer</h3>
                </TeamBox>
                <TeamBox className="two">
                    <TeamImg>
                        <Imgteam src={t2} />
                    </TeamImg>
                    <h1>LINDA LARSON</h1>
                    <h3>Manager</h3>
                </TeamBox>
                <TeamBox className=" three">
                    <TeamImg>
                        <Imgteam src={t3} />
                    </TeamImg>
                    <h1>MARRY HUDSON
                    </h1>
                    <h3>Designer</h3>
                </TeamBox>
                <TeamBox className="four">
                    <TeamImg>
                        <Imgteam src={t4} />
                    </TeamImg>
                    <h1>GAMES LARSON</h1>
                    <h3>Designer</h3>
                </TeamBox>
                <TeamBox className="five">
                    <TeamImg>
                        <Imgteam src={t5} />
                    </TeamImg>
                    <h1>PAUL PERRY
                    </h1>
                    <h3>Developer</h3>
                </TeamBox>
                <TeamBox className="six">
                    <TeamImg>
                        <Imgteam src={t6} />
                    </TeamImg>
                    <h1>LOO SCAVO
                    </h1>
                    <h3>Designer</h3>
                </TeamBox>
                <TeamBox className="teambox seven">
                    <TeamImg>
                        <Imgteam src={t7} />
                    </TeamImg>
                    <h1>MIA BEAUFORT
                    </h1>
                    <h3>Developer</h3>
                </TeamBox>
                <TeamBox className="eight">
                    <TeamImg>
                        <Imgteam src={t8} />
                    </TeamImg>
                    <h1>JESS PERRY
                    </h1>
                    <h3>Developer</h3>
                </TeamBox>
            </TeamBoxFlex>
        </TeamContainerStle>
    )
}
export default TeamComponents;
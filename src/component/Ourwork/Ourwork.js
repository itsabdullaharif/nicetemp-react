import setting from "../../assests/setting.png"
import marketing from "../../assests/marketing.png"
import analytics from "../../assests/analytics.png"
import styled from "styled-components";


export const OurworkContParentStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.3rem;
background-color: #f2f2f2;
padding: 30px 50px;

.green{
background-color:#2ccc7e;
color:white;
font-size: 2rem;
} 
@media (max-width: 820px) {
    padding: 0;
}
`
export const WorkBoxCont = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
margin-bottom: 10rem;

@media (max-width: 1025px) {
    padding-left: 5rem;
}
@media (max-width: 820px){
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
}

`
export const WorkBox = styled.div`
width: 29%;
margin: 1rem 1rem;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
font-size: 1.8rem;
padding: 8rem 1rem;

@media (max-width: 1319px) {
    width: 29%;
    padding: 6rem 0rem;
    font-size: 2rem;
}
@media (max-width: 1025px) {
    width: 36rem;
    padding: 6rem 1rem;
}
@media (max-width: 820px){
    width: 74%;
    height: 5rem;
}
@media (max-width: 500px){
    width: 100%;
}





`
export const FlexRowCenter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0 1rem;


`
export const Setting = styled.img`
width: 8rem;
`
export const Marketing = styled.img`
width: 7rem;

`
export const Analytic = styled.img`
width: 8rem;
`
export const Center = styled.h1`
text-align:center;
font-size: 4rem;

@media(max-width: 420px){
    font-size: 3.5rem;
line-break: normal;
}
`
export const WorkBoxDev = styled.h1`
font-size:2.6rem;
`
export const Green = styled.h1`
font-size:2.6rem;
`


function OurWorkCont() {
    return (
        <OurworkContParentStyle>

            <h2>ABOUT OUR WORK</h2>
            <Center>We run all kinds of IT services<br />
                that vow your success</Center>

            <WorkBoxCont>
                <WorkBox>

                    <FlexRowCenter>
                        <Setting src={setting} />
                        <div>
                            <WorkBoxDev>Development</WorkBoxDev>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the
                                text.
                            </p>
                        </div>
                    </FlexRowCenter>
                </WorkBox>
                <WorkBox className="green">

                    <FlexRowCenter>
                        <Marketing src={marketing} />
                        <div>
                            <Green>Web Marketing</Green>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the
                                text.
                            </p>
                        </div>
                    </FlexRowCenter>
                </WorkBox>
                <WorkBox>

                    <FlexRowCenter>
                        <Analytic src={analytics} />
                        <div></div>
                        <div>
                            <WorkBoxDev>Data Analytic</WorkBoxDev>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the
                                text.
                            </p>
                        </div>
                    </FlexRowCenter>
                </WorkBox>
            </WorkBoxCont>


        </OurworkContParentStyle>

    )
}
export default OurWorkCont;












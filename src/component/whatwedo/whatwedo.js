import styled from "styled-components"

export const Background = styled.div`
width: 18rem;
height: 23rem;
font-size: 1.7rem;
padding: 3rem;
@media (max-width: 1025px) {
    width: 35%;
}
@media (max-width: 820px){
    width: 80%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}


`
export const Color = styled.div`
width: 18rem;
height: 23rem;
font-size: 1.7rem;
padding: 3rem;
background-color:#f2f2f2;
@media (max-width: 1025px) {
    width: 35%;
}
@media (max-width: 820px){
    width: 80%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}



`



function Whatwedo() {
    return (
        <>
            <Background className="elder">
                <h1>What I Do</h1>
                <p>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse
                    rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien.</p>
            </Background>
            <Background>
                <h6>01.
                </h6>
                <h1>Web Design</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </Background>
            <Color>
                <h6>02. </h6>
                <h1>Print</h1>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </Color>
            <Background className="workintrobox">
                <h6>03.</h6>
                <h1>Illustration</h1>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </Background>

        </>
    )
}
export default Whatwedo;
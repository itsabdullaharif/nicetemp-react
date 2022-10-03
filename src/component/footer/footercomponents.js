import styled from "styled-components";

export const Footer = styled.div`
height: 23rem;
background-color: #333333;
padding: 30px 10px;
color: white;
text-align: center;
font-size: 1.5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`



function FooterComponents() {
    return (
        <Footer>
            <p>Sample text. Click to select the text box. Click again or double <br /> click to start editing the text.</p>
            <div><a href="#">Website Templates </a>
                <p>created with</p><a href="#">Website Builder azSoftware.</a>
            </div>
        </Footer>
    )
}
export default FooterComponents;





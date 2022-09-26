import Aboutuscomonents from "../component/aboutus/aboutus";
import styled from "styled-components";

export const Aboutuscontainerstle = styled.div`
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



function Aboutuscontainer() {
    return (
        <Aboutuscontainerstle>
            <Aboutuscomonents />
        </Aboutuscontainerstle>
    )
}
export default Aboutuscontainer;
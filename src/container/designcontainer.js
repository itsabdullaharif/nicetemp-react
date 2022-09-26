import styled from "styled-components";
import Designcomponents from "../component/designcomponents/designcomponents";


export const Designcontainerstle = styled.div`
display: flex;
flex-direction: column;
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


function Designcontainer() {
    return (
        <Designcontainerstle>
            <Designcomponents />
        </Designcontainerstle>
    )
}
export default Designcontainer;
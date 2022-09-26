import styled from "styled-components";
import Advicecomponents from "../component/advicecomponents/advicecomponents";






export const Advicecontainerstle = styled.div`
background-color: #f2f2f2;
padding: 30px 50px;
display: flex;
justify-content: center;

@media (max-width: 420px) {
padding: 3rem 0;
height:unset;
}
`


function Advicecontainer() {
    return (
        <Advicecontainerstle>
            <Advicecomponents />
        </Advicecontainerstle>
    )
}
export default Advicecontainer;
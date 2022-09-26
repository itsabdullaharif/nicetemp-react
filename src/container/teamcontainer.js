import styled from "styled-components";
import Teamcomponents from "../component/teamcomponents/teamcomponents";
export const Teamcontainerstle = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: white;
font-size: 1rem;
padding: 4rem 5rem;
margin-bottom: 3rem;

`



function Teamcontainer() {
    return (
        <Teamcontainerstle>
            <Teamcomponents />
        </Teamcontainerstle>
    )
}
export default Teamcontainer;
import styled from "styled-components";
import Ourworkcont from "../component/Ourwork/Ourwork";

export const Ourworkcontparentstyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.3rem;
background-color: #f2f2f2;
padding: 30px 50px;
@media (max-width: 820px) {
    padding: 0;
}
`





function Ourworkcontparent() {
    return (
        <Ourworkcontparentstyle>
            <Ourworkcont />
        </Ourworkcontparentstyle>
    )
}
export default Ourworkcontparent;

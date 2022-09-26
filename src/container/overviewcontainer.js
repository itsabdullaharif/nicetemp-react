import styled from "styled-components"
import Overviewcomponents from "../component/overviewcomponents/overviewcomponents";

export const Whatwedocontstle = styled.div`
ackground-color: #f2f2f2;
    display: flex;
    padding: 30px 50px;
    align-items: center;
    justify-content: center;
    flex-direction: column;



    @media(max-width:420px){
        padding 30px 0px;
    }
`


function Overviewcont() {
    return (
        <Whatwedocontstle>
            <Overviewcomponents />
        </Whatwedocontstle>
    )
}
export default Overviewcont;
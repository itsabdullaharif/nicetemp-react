import styled from "styled-components"
import Whatwedo from "../component/whatwedo/whatwedo";

export const Whatwedostyle = styled.div`
display: flex;
justify-content: center;
font-size: 1.4rem;
column-gap: 5rem;
padding: 6rem 50px;
flex-wrap: wrap;
background-color: white;


@media (max-width: 1025px) {
    padding-left: 11rem;
    justify-content: unset;
}
@media (max-width: 420px){
    padding: 12rem 0rem;
    justify-content: center;
}
`


function Whatwedocont() {
    return (
        <Whatwedostyle>
            <Whatwedo />
        </Whatwedostyle>
    )
}
export default Whatwedocont;
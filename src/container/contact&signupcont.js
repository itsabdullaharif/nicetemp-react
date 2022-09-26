import styled from "styled-components";
import Contactsignup from "../component/contact&signup/contact&signup";
export const Contactsignupstyle = styled.div`
display: flex;
padding: 7rem 50px;
justify-content: center;
background-color: white;

@media (max-width: 820px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (max-width: 740px){
    flex-direction: column;
}
@media (max-width: 420px) {
    padding: 7rem 1rem;
}


`



function Contactsignupcont() {
    return (
        <Contactsignupstyle>
            <Contactsignup />
        </Contactsignupstyle>
    )
}
export default Contactsignupcont;
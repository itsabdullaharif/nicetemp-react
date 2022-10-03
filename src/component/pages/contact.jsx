import styled from "styled-components";




export const ContactComponents = styled.div`
    list-style: none;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin-left: 10rem;
    margin-top: 9rem;
    border: 1px solid #2ccc7e;
    width: 25%;
    padding: 1rem 3rem;
    
button{
border: none;
color:white;
background-color:#2ccc7e;
padding: .8rem 2rem;
font-size: 1.05rem;
border-radius: 1rem;

    }
`


const Contact = () => {
    return (
        <>
            <ContactComponents>
                <div>
                    <h1>LET'S TALK</h1>
                    <p>We are here to answer any questions <br /> you may have about our services.</p>


                    <div>
                        <h3>Address</h3>
                        <p>132, Les Doulgas Cresent Avenue NY, !504 DB</p>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <p>+(888)24-2174 | +1(888)25-6666</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>creativestudionewyork12@gmail.com</p>
                    </div>
                    <button>Send Email</button>
                </div>
            </ContactComponents>
        </>
    )


}
export default Contact;
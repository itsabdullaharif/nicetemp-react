import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import menu from "../../assests/menu.png"
import "../Navbar/Navbar.css"
import Contact from "../pages/contact"
export const Navbar = styled.div`
.fa-x{
  font-size: 2rem;
    position: absolute;
    right: 0;
    margin: 1rem;
}
`

export const Li = styled.a`
color: white;
`

export const Ul = styled.ul`
margin-top: 7rem;
display:flex ;
flex-direction: column;
align-items:center ;
row-gap: 3rem;
:link{
    color: white;
}

`
export const Parent = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;



`
export const Navbaricon = styled.img`
width: 3.3rem;
height: 3.3rem;

`


const SidebarComp = () => {

    const [showNavbar, setshowNavbar] = useState(false);

    const menuitem = {
        name: "contact",
        path: "/contact"
    }
    return (
        <>
            <Navbar className={showNavbar ? "show" : "hide"}>
                <i className="fa-solid fa-x" onClick={() => setshowNavbar(!showNavbar)}></i>
                <Ul>
                    <Li>About</Li>
                    <Link to="/contact">Contact</Link>
                </Ul>
            </Navbar>
            <Parent>
                <div onClick={() => setshowNavbar(!showNavbar)}><Navbaricon src={menu} /></div>
            </Parent>
        </>
    )


}
export default SidebarComp;
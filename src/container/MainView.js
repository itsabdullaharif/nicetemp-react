import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '../globalstyles/globalstyles';
import Landingpage from '../component/landingpage/landingpage';
import Ourworkcont from '../component/Ourwork/Ourwork';
import Whatwedo from '../component/whatwedo/whatwedo'
import Designcomponents from '../component/designcomponents/designcomponents'
import Advicecomponents from '../component/advicecomponents/advicecomponents'
import Aboutuscomonents from '../component/aboutus/aboutus'
import OverviewCont from '../component/overviewcomponents/overviewcomponents'
import Teamcomponents from '../component/teamcomponents/teamcomponents'
import Whatpplsay from '../component/whatpplsay/whatpplsay'
import Contactsignup from '../component/contact&signup/contact&signup'
import Footercomponents from '../component/footer/footercomponents';
import SidebarComp from '../component/Navbar/sidebarcomp';
import Sidebar from '../sidebar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
function MainView() {
    return (
        <>

            <GlobalStyle />
            <SidebarComp />
            <Landingpage />
            <Ourworkcont />
            <Whatwedo />
            <Designcomponents />
            <Advicecomponents />
            <Aboutuscomonents />
            <OverviewCont />
            <Teamcomponents />
            <Whatpplsay />
            <Contactsignup />
            <Footercomponents />
        </>

    )
}
export default MainView;
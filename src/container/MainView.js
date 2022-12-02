import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '../globalstyles/globalstyles';
import LandingPage from '../component/landingpage/Landingpage';
import OurWorkCont from '../component/Ourwork/Ourwork';
import WhatWedo from '../component/whatwedo/Whatwedo'
import DesignComponents from '../component/designcomponents/Designcomponents'
import AdviceComponents from '../component/advicecomponents/Advicecomponents'
import AboutUsComponents from '../component/aboutus/Aboutus'
import OverviewCont from '../component/overviewcomponents/Overviewcomponents'
import TeamComponents from '../component/teamcomponents/Teamcomponents'
import WhatPplsay from '../component/whatpplsay/Whatpplsay'
import ContactSignup from '../component/contact&signup/Contact&signup'
import FooterComponents from '../component/footer/Footercomponents';
import SidebarComp from '../component/Navbar/Sidebarcomp';
import Sidebar from '../Sidebar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
function MainView() {
    return (
        <>

            <GlobalStyle />
            <SidebarComp />
            <LandingPage />
            <OurWorkCont />
            <WhatWedo />
            <DesignComponents />
            <AdviceComponents />
            <AboutUsComponents />
            <OverviewCont />
            <TeamComponents />
            <WhatPplsay />
            <ContactSignup />
            <FooterComponents />
        </>

    )
}
export default MainView;
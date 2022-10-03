import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '../globalstyles/globalstyles';
import LandingPage from '../component/landingpage/landingpage';
import OurWorkCont from '../component/Ourwork/Ourwork';
import WhatWedo from '../component/whatwedo/whatwedo'
import DesignComponents from '../component/designcomponents/designcomponents'
import AdviceComponents from '../component/advicecomponents/advicecomponents'
import AboutUsComponents from '../component/aboutus/aboutus'
import OverviewCont from '../component/overviewcomponents/overviewcomponents'
import TeamComponents from '../component/teamcomponents/teamcomponents'
import WhatPplsay from '../component/whatpplsay/whatpplsay'
import ContactSignup from '../component/contact&signup/contact&signup'
import FooterComponents from '../component/footer/footercomponents';
import SidebarComp from '../component/Navbar/sidebarcomp';
import Sidebar from '../sidebar';
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
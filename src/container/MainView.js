import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '../GlobalStyles/GlobalStyles';
import LandingPage from '../component/LandingPage/LandingPage';
import OurWorkCont from '../component/Ourwork/Ourwork';
import WhatWedo from '../component/WhatWedo/WhatWedo'
import DesignComponents from '../component/DesignComponents/DesignComponents'
import AdviceComponents from '../component/AdviceComponents/AdviceComponents'
import AboutUsComponents from '../component/AboutUs/AboutUs'
import OverviewCont from '../component/OverviewComponents/OverviewComponents'
import TeamComponents from '../component/TeamComponents/TeamComponents'
import WhatPplsay from '../component/WhatPplsay/whatpplsay'
import ContactSignup from '../component/Contact&Signup/Contact&Signup'
import FooterComponents from '../component/Footer/FooterComponents';
import SidebarComp from '../component/Navbar/SidebarComp';
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
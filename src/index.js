import React from 'react';
import Background from './component/whatwedo/whatwedo';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Whatwedo from './component/whatwedo/whatwedo';
import Whatwedocont from './container/whatwedocont';
import { GlobalStyle } from './globalstyles/globalstyles';
import Whatpplsaycont from './container/whatpplsaycont';
import Landingpage from './component/landingpage/landingpage';
import Ourworkcontparent from './container/ourworkcont';
import Designcontainer from './container/designcontainer';
import Advicecontainer from './container/advicecontainer';
import Aboutuscontainer from './container/aboutuscontainer';
import Teamcontainer from './container/teamcontainer';
import Contactsignupcont from './container/contact&signupcont';
import Footercont from './container/footercont';
import Overviewcont from './container/overviewcontainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Landingpage />
    <Ourworkcontparent />
    <Whatwedocont />
    <Designcontainer />
    <Advicecontainer />
    <Aboutuscontainer />
    <Overviewcont />
    <Teamcontainer />
    <Whatpplsaycont />
    <Contactsignupcont />
    <Footercont />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

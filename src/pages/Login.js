import React, { Component } from 'react';
import { generateMedia } from 'styled-media-query';
import styled from 'styled-components';

import logo from '../css/img/svg/logo.svg'; 
import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';

class Login extends Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                    <Logo src={logo} alt="logo" className="logo" alt="logo" />
                </div>
               <LoginForm/>
               <LoginFooter />              
            </div>
        )
    }
}


export default Login;

// Media Query
const customMedia = generateMedia({
    tablet: '640px',
    lgTablet: '740px'
});


// Logo
const Logo = styled.img`
width: 11rem;
position: absolute;11%
top: 25%;
left: 14%;
transform: translate(-50%, 10%);
margin-left: 0;
${customMedia.lessThan('tablet')`
top: 45%;
left: 23%;
`}
`;
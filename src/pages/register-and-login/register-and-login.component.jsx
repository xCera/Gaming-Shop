import React from 'react';
import './register-and-login.styles.scss'

import Login from '../../components/login/login.component'
import Register from '../../components/register/register.component'

const RegisterAndLoginPage = () =>{

    return(
        <div className='register-and-login-page'>
            <Login></Login>
            <Register></Register>
        </div>
    )
}

export default RegisterAndLoginPage
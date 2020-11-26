import React from 'react';
import './register-and-login.styles.scss'

import Login from '../../components/login/login.component'

const RegisterAndLoginPage = () =>{

    return(
        <div className='register-and-login-page'>
            <Login></Login>
        </div>
    )
}

export default RegisterAndLoginPage
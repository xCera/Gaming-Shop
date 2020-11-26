import React from 'react';
import './login.styles.scss'

import FormInput from '../form-input/form-input.component'

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = e =>{
        e.preventDefault()

        this.setState({email:'', password:''})
    }

    handleChange = e =>{
        const {value, name} = e.target;

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='login'>
                <h2>I already have an account</h2>
                <span>Login with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        label='Email'
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required> 
                    </FormInput>
                
                    <FormInput 
                        name='password'
                        label='Password'
                        handleChange={this.handleChange} 
                        type='password' 
                        value={this.state.password} 
                        required>

                    </FormInput>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}

export default Login
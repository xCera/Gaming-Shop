import React from 'react';
import './register.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class Register extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
        
    }

    handleSubmit = async e =>{
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert("Passwords don't match")
            return;
        }
    
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch(err){
            console.error(err);
        }
    }

    handleChange = e =>{
        const {value, name} = e.target;
 
        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='register'>
                <h2 className='title'>I do not have a account</h2>
                <span>Register with your email and password</span>

                <form className='register-form' onSubmit={this.handleSubmit}>
                <FormInput 
                        type='text'
                        name='displayName' 
                        label='Display Name'
                        onChange={this.handleChange} 
                        value={displayName} 
                        required> 
                </FormInput>
                <FormInput 
                        type='email'
                        name='email' 
                        label='Email'
                        onChange={this.handleChange} 
                        value={email} 
                        required> 
                </FormInput>
                <FormInput 
                        type='password'
                        name='password' 
                        label='Password'
                        onChange={this.handleChange} 
                        value={password} 
                        required> 
                </FormInput>
                <FormInput 
                        type='password'
                        name='confirmPassword' 
                        label='Confirm Password'
                        onChange={this.handleChange} 
                        value={confirmPassword} 
                        required> 
                </FormInput>

                <CustomButton  type='submit'>Register</CustomButton>
                </form>
            </div>
        )
    }

}

export default Register;
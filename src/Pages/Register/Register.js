import React  from "react";
import {ReactComponent as Logo} from '../../logo.svg';
import './Register.css';

class Register extends React.Component {
    state = {
        fullname:'',
        uname: '',
        password: '',
        cpassword:'',
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='div-register'>
                <div className='div-register-logo'>
                    <Logo />
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                    <input className='input' type = 'fullname' name = 'fullname' placeholder ='Display Name' required onChange = {this.handleChange} />
                    <input className='input' type = 'username' name = 'uname' placeholder ='Username' required onChange = {this.handleChange} />
                    <input className='input' type = 'password' name = 'password' placeholder ='Password' required onChange = {this.handleChange} />
                    <input className='input' type = 'cpassword' name = 'cpassword' placeholder ='Confirm Password' required onChange = {this.handleChange} />
                    <button className='button' onSubmit = {this.handleSubmit}> Register </button>
                    </form>
                </div>
            </div>    
        )
    }
} 

export default Register;
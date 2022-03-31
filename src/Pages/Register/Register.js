import React  from "react";
import {ReactComponent as Logo} from '../../logo.svg';
import './Register.css';
import {useNavigate} from 'react-router-dom';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class Register extends React.Component {
    state = {
        fullname:'',
        uname: '',
        password: '',
        cpassword:'',
        errors: {
            fullname:'',
            uname: '',
            password: '',
            cpassword:'',
          }
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          this.props.navigate('/')

        }else{
          console.error('Invalid Data')
        }
      }

    render(){
        return(
            <div className='div-register'>
                <div className='div-register-logo'>
                    <Logo />
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
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

function RegisterN(props) {
    let navigate = useNavigate();
    return <Register {...props} navigate={navigate} />
}

export default RegisterN;
import React  from "react";
import {ReactComponent as Logo} from '../../logo.svg';
import './Login.css';
import {useNavigate} from 'react-router-dom';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  }; 

class Login extends React.Component {
    state = {
        uname: '',
        password: '',
        errors: {
            uname: '',
            password: '',
          }
    }

    /*validateUser = () => {
        let valid = 1;
        // 1 - User does not exist
        // 2 - User exists, incorrect password
        // 3 - User exists, correct password
        state.uname
        state.password
        return valid;
    }*/

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(validateForm(this.state.errors)) {
            /*validate_user_var = this.validateUser()
            if(validate_user_var == 3){
                this.props.navigate('/userhome')
            }
            else if(validate_user_var == 2){
                    console.error('Invalid Password')
            }
            else{
                this.props.navigate('/userregister')
            }*/
            this.props.navigate('/userhome')
        }else{
          console.error('Invalid Data')
        }
      }

    render(){
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                    <Logo />
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <input className='input' type = 'username' name = 'uname' placeholder ='Username' required onChange = {this.handleChange} />
                    <input className='input' type = 'password' name = 'password' placeholder ='Password' required onChange = {this.handleChange} />
                    <button className='button' onSubmit = {this.handleSubmit}> Log In </button>
                    </form>
                    <form>
                    <button className='button' onClick = {() => this.props.navigate('/userregister')}> New User? Register Here </button>
                    </form>
                </div>
            </div>    
        )
    }
} 

function LoginN(props) {
    let navigate = useNavigate();
    return <Login {...props} navigate={navigate} />
}

export default LoginN;
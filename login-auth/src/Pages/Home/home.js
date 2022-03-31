import React  from "react";
import {ReactComponent as Logo} from '../../logo.svg';
import './home.css';
import {useNavigate} from 'react-router-dom';

class Home extends React.Component {
    state = {
        
    }

    handleChange = (e) => {
        
    }

    render(){
        return(
            <div className='div-home'>
                <div className='div-home-logo'>
                    <Logo />
                </div>
                <div>
                    <h1>In Progress</h1>
                </div>
            </div>    
        )
    }
} 

function HomeN(props) {
    let navigate = useNavigate();
    return <Home {...props} navigate={navigate} />
}

export default HomeN;
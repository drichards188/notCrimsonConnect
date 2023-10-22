import React, {useState} from 'react';
import './login_style.css';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

function RegistrationForm() {

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "username"){ setUsername(value); }
        if (id === "password") {
            setPassword(value);
            validatePassword(value);
        }
    }

    const isFormValid = username !== '' && password !== '';

    const NavigateButton = ({url, displayText}) => {
        // alert(JSON.stringify(displayText));
        const navigate = useNavigate();

        function handleClick() {
            navigate(`/${url}`);
        }

        return (
            <Button onClick={handleClick}>
                {displayText}
            </Button>
        );
    }
    const validatePassword = (value) => {
        // Implement your password validation rules here
        if (value.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else if (!/[A-Z]/.test(value)) {
            setPasswordError('Password must contain at least one uppercase letter');
        } else if (!/[0-9]/.test(value)) {
            setPasswordError('Password must contain at least one digit');
        } else {
            setPasswordError('');
        }
    }
    const handleSubmit = () => {
        if (passwordError) {
            setMessage(passwordError);
        } else {
            setMessage("Your response is submitted");
            console.log(username,password);
        }
    };

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" form="username"> Username </label>
                    <input className="form_input" type="text"
                           value={username} onChange = {(e) => handleInputChange(e)}
                           id="username" placeholder="Username"/>
                </div>
                <div className="password">
                    <label className="form__label" form="password" aria-required> Password </label>
                    <input className="form_input" type="password"
                           value={password} onChange = {(e) => handleInputChange(e)}
                           id="password" placeholder="Password"/>
                </div>
                <div className="form">
                        <div className="footer">
                            <NavigateButton
                                disabled={!isFormValid}
                                type="button"
                                className="btn"
                                url="home"
                                displayText="Login" />
                        </div>
                        <div className="message">{message}</div> {/* Add this */}
                </div>
                <div className="form">
                        <div className="footer">
                            <NavigateButton type="button" className="btn" url="Register" displayText="New User? Create Account!" />
                        </div>
                        <div className="message">{message}</div> {/* Add this */}
                </div>
            </div>
        </div>
    )
}
export default RegistrationForm;
import React, {useState} from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";

function RegistrationForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){ setFirstName(value); }
        if(id === "lastName"){ setLastName(value); }
        if(id === "email"){ setEmail(value);}
        if (id === "password") {
            setPassword(value);
            validatePassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
            validatePassword(value);
        }
    }
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
        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
        } else if (passwordError) {
            setMessage(passwordError);
        } else {
            setMessage("Your response is submitted");
            console.log(firstName, lastName, email, password, confirmPassword);
        }
    };

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" form="firstName"> First Name </label>
                    <input className="form_input" type="text"
                           value={firstName} onChange = {(e) => handleInputChange(e)}
                           id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" form="lastName"> Last Name </label>
                    <input  className="form_input" type="text"
                            value={lastName} onChange = {(e) => handleInputChange(e)}
                            name="" id="lastName" placeholder="Last Name"/>
                </div>
                <div className="email">
                    <label className="form__label" form="email"> Email </label>
                    <input className="form_input" type="email"
                           value={email} onChange = {(e) => handleInputChange(e)}
                           id="email" placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" form="password" aria-required> Password </label>
                    <input className="form_input" type="password"
                           value={password} onChange = {(e) => handleInputChange(e)}
                           id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" form="confirmPassword" aria-required> Confirm Password </label>
                    <input className="form_input" type="password"
                           value={confirmPassword} onChange = {(e) => handleInputChange(e)}
                           id="confirmPassword" placeholder="Confirm Password"/>
                </div>
                <div className="form">
                    <div className="form-body">
                        <div className="footer">
                            {/*<NavigateButton type="button" className="btn" url="home" displayText="Create Account" />*/}
                            <Button onClick={() => {
                                const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        "username":firstName.concat(lastName),
                                        "password":password,
                                        "confirm_password":confirmPassword,
                                        "first_name":firstName,
                                        "last_name":lastName,
                                        "phone_number":"1234567890",
                                        "email": email
                                    })
                                };
                                fetch('http://10.6.128.227:5000/register', requestOptions)
                                    .then(response => response.json())
                                    .then(data => alert(`data is: ${JSON.stringify(data)}`))}

                            }>Create User</Button>
                        </div>
                        <div className="message">{message}</div> {/* Add this */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegistrationForm;
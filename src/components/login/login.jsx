import React, {useState} from 'react';
import '../style.css';

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
                <div className="password">
                    <label className="form__label" form="password" aria-required> Password </label>
                    <input className="form_input" type="password"
                           value={password} onChange = {(e) => handleInputChange(e)}
                           id="password" placeholder="Password"/>
                </div>
                <div className="form">
                    <div className="form-body">
                        {/* ... (other input fields) */}
                        <div className="footer">
                            <button type="button" className="btn" onClick={handleSubmit}> Register </button>
                        </div>
                        <div className="message">{message}</div> {/* Add this */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegistrationForm;
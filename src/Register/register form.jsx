import { useState } from 'react';

import './REGISTER.css'

export default function RForm() {
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhNo] = useState('');
    const [dob, setDOB] = useState('');
    const [password, setPassword] = useState('');
    const [cpwd, setCpwd] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (event) => {
        setName(event.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (event) => {
        setEmail(event.target.value);
        setSubmitted(false);
    };

    // Handling the Phone-Number change
    const handlePhNo = (event) => {
        setPhNo(event.target.value);
        setSubmitted(false);
    }

    // Handling the password change
    const handleDOB = (event) => {
        setDOB(event.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (event) => {
        setPassword(event.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleConfirmPassword = (event) => {
        setCpwd(event.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === '' || email === '' || phno==='' || dob==='' || password !== cpwd) {
        setError(true);
        } else {
        setSubmitted(true);
        setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
        <div
            className="success"
            style={{
            display: submitted ? '' : 'none',
            }}>
            <h1>User {name} successfully registered!!</h1>
        </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
        <div
            className="error"
            style={{
            display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
        </div>
        );
    };


    return (
        <div className="register-body" >
        <div className="register-form">
        <div>
            <h1><center>User Registration</center></h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
        
        <form ><center>
            {/* Labels and inputs for form data */}
            <table>
                <tr>
                    <td>
                        <label className="label">Name</label>
                    </td>
                    <td>
                        <input onChange={handleName} className="input"
                            value={name} type="text" required/><br />
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <label className="label">Email</label>
                    </td>
                    <td>
                        <input onChange={handleEmail} className="input"
                            value={email} type="email" required/><br />            
                    </td>
                </tr>
                    
                <tr>
                    <td>
                        <label className="label">Email</label>
                    </td>
                    <td>
                        <input onChange={handleEmail} className="input"
                            value={email} type="email" required/><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label">Email</label>
                    </td>
                    <td>
                        <input onChange={handleEmail} className="input"
                            value={email} type="email" required/><br />                
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label">Email</label>
                    </td>
                    <td>
                        <input onChange={handleEmail} className="input"
                            value={email} type="email" required/><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label">Phone Number</label>
                    </td>
                    <td>
                        <input onChange={handlePhNo} className="input"
                            value={phno} type="tel" required/><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label">Date Of Birth</label>
                    </td>
                    <td>
                        <input onChange={handleDOB} className="input"
                            value={dob} type="date" required/><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label">Password</label>
                    </td>
                    <td>
                        <input onChange={handlePassword} className="input"
                            value={password} type="password" required/><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label">Confirm Password</label>
                    </td>
                    <td>
                        <input onChange={handleConfirmPassword} className="input"
                            value={cpwd} type="password" required/><br />
                    </td>
                </tr>

                </table>

            <button onClick={handleSubmit} class="btn btn-success" type="submit" value={submitted}>
                Submit
            </button>
            </center>
        </form>
        </div>
        </div>
    );
}

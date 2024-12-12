import React, { useState } from 'react';
import './CreateAccount.module.css';
import logo from '../../assets/logo.png'; // Проверете ја патеката до логото

const CreateAccount: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Account created for: ${username}`);
    };

    return (
        <div className="container">
            <div className="logoContainer">
            </div>
            <div className="formContainer">
                <h1>Create New Account</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        className="dateInput"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                    <button type="submit" className="submitButton">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;

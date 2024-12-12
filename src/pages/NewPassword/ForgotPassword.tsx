import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Password reset link sent to: ${email} with new password: ${newPassword}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="hello@reallygreatsite.com"
                        required
                    />
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        required
                    />
                    <button type="submit" className={styles.submitButton}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;

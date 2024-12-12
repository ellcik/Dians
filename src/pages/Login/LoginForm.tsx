import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid email or password');
            }

            const data = await response.json();
            alert(`Login successful! Your token: ${data.token}`);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.logoContainer}>
            </div>
            <h2>Login</h2>
            <p>Sign in to continue</p>
            <form onSubmit={handleLogin} className={styles.loginForm}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.loginButton}>
                    Log In
                </button>
            </form>
            <div className={styles.links}>
                <Link to="/create-account">Don't have an account?</Link>
                <Link to="/forgot-password">Forgot password?</Link>
            </div>
        </div>
    );
};

export default LoginForm;

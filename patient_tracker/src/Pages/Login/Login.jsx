// src/components/Pages/Login/Login.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './login.module.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Invalid credentials');
            }

            console.log('Login successful:', data);

            // Handle "Remember Me" functionality
            if (rememberMe) {
                localStorage.setItem('userEmail', email); // Store email in localStorage
            } else {
                localStorage.removeItem('userEmail'); // Remove email if "Remember Me" is unchecked
            }

            // Redirect based on user role
            redirectUser(data.role);
        } catch (err) {
            setError(err.message || 'An error occurred during login.');
        } finally {
            setLoading(false);
        }
    };

    // Redirect based on user role
    const redirectUser = (role) => {
        switch (role) {
            case 'doctor':
                navigate('/doctor-dashboard');
                break;
            case 'nurse':
                navigate('/nurse-dashboard');
                break;
            case 'admin':
                navigate('/admin-dashboard');
                break;
            case 'patient':
                navigate('/patient-dashboard');
                break;
            default:
                navigate('/'); // Fallback to home page
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h2>Login</h2>
                {error && <p className={styles.error}>{error}</p>}

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.rememberMe}>
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>

                <button type="submit" className={styles.submitButton} disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                <div className={styles.forgotPassword}>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
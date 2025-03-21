// src/Pages/Home/Home.jsx
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate(); // Hook for navigation

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to the Home Page</h1>
            <button onClick={handleLoginClick} style={styles.button}>
                Go to Login Page
            </button>
        </div>
    );
}

// Inline styles for simplicity (you can move these to a CSS module if needed)
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    },
};
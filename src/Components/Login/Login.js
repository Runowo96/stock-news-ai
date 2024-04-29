import React, { useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from './Input/Input';

function Login() {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/api/users/login', {
				email: event.target.email.value,
				password: event.target.password.value,
			})
			// Store token to session storage
			sessionStorage.setItem('token', response.data.token);
			navigate('/')
			
		} catch(error) { 
			setError("Something went wrong")
			
		}

    };

    return (
        <main className="login-page">
            <form className="login" onSubmit={handleSubmit}>
                <h1 className="login__title">Log in</h1>

                <Input type="text" name="email" label="Email" />
                <Input type="password" name="password" label="Password" />

                <button className="login__button">
                    Log in
                </button>

                {error && <div className="login__message">{error}</div>}
            </form>
            <p>
                Need an account? <Link to="/signup">Sign up</Link>
            </p>
        </main>
    );
}

export default Login

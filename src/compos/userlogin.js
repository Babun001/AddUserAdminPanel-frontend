import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Userlogin() {
    const navigator = useNavigate();
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const spamStyle = () => {
        if (!userName) {
            return { display: "none" }
        }
        if (userName.includes(' ')) {
            return { color: "red" }
        }
        return { display: "none" }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://adduseradminpanel-backend.onrender.com/v1/api/user-login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: userName.toLowerCase(),
                    password: password
                })
            })

            if (response.status === 200) {
                const result = await response.json();
                // console.log(result);
                
                alert(`Welcome to user panel ${result.userName}!`)
                // console.log(result.userName);
                
                navigator(`/user-dash/${result.userName}`)
            } else {
                const error = await response.text();
                alert(`Error: ${error}`);
            }

        } catch (error) {
            console.error("Error in handleLogin: ", error);

        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
                <h3 className="text-center mb-3">User Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">User Name</label>
                        <br />
                        <span style={spamStyle()}>Enter user name without space!</span>
                        <input
                            type="text"
                            className="form-control"
                            id="phoneNumber"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
}

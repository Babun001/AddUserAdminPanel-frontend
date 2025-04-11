import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
    const [users, setUsers] = useState(['Alice', 'Bob', 'Charlie']);
    const [newUser, setNewUser] = useState('');

    // const handleCreateUser = () => {
    //     const name = prompt("Enter new user name:");
    //     if (name && !users.includes(name)) {
    //         setUsers([...users, name]);
    //         alert(`User "${name}" created!`);
    //     }
    // };
    const navigate = useNavigate();

    return (
        <div className="container py-5">
            <h2 className="mb-4">Admin Dashboard</h2>

            <div className="mb-3">
                <button className="btn btn-success me-3" onClick={() => navigate('/new-user-form')}>
                    Create New User
                </button>

                <div className="dropdown d-inline-block">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Show Users
                    </button>
                    <ul className="dropdown-menu">
                        {users.map((user, index) => (
                            <li key={index}>
                                <span className="dropdown-item">{user}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

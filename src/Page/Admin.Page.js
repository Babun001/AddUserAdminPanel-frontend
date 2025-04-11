import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://adduseradminpanel-backend.onrender.com/v1/api/all-users');
                const result = await response.json();
                // console.log(result);

                setUsers(result.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUserData();
    }, []);

    const navigate  = useNavigate();
    
    function navigator(userID){
        navigate(`/user/${userID}`)
      }
    

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
                        {users.length === 0 ? (
                            <li className="dropdown-item text-muted">No users found</li>
                        ) : (
                            users.map((user, index) => (
                                <li key={index}>
                                    <button className="dropdown-item" onClick={() => navigator(user.userName)}>
                                        {user.userName} - ₹{user.balance || 0}
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

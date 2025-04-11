import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

export default function UserDash() {
    const { UserName } = useParams();
    // console.log(UserName);
    
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchSingleUser = useCallback(async () => {
        try {
            const res = await fetch(`https://adduseradminpanel-backend.onrender.com/v1/api/user/${UserName}`);
            // console.log(UserName);
            
            const data = await res.json();
            setUserData(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    }, [UserName]);

    useEffect(() => {
        fetchSingleUser();
    }, [fetchSingleUser]);

    return (
        <div className="container py-5">
            <h2 className="mb-4 text-primary">
                Hi, {userData?.userName || UserName || 'Failed to Fetch!'}
            </h2>

            {loading ? (
                <p>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Loading user details...
                </p>
            ) : userData ? (
                <div className="card p-4 shadow-sm">
                    <h4 className="text-success mb-3">
                        Current Balance: ₹{userData?.balance ?? 0}
                    </h4>
                </div>
            ) : (
                <p className="text-danger">User data could not be loaded.</p>
            )}
        </div>
    );
}

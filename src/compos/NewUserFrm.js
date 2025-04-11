import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]);

  const navigator = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    if (!userName) {
      alert("Please enter a user name.");
      return;
    }

    try {
      const res = await fetch('https://adduseradminpanel-backend.onrender.com/v1/api/new-user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName })  // send as userName
      });

      if (res.status === 200) {
        alert(`${userName} created successfully!`);
        setUserName(""); // Clear input
      } else {
        const err = await res.text();
        alert(`Error: ${err}`);
      }
    } catch (error) {
      console.error("Error in handleCreateUser: ", error);
    }
  };


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


  function navigate(userID) {
    navigator(`/user/${userID}`)
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Admin Dashboard</h2>

      <form className="card p-4 mb-4 shadow-sm" onSubmit={handleCreateUser}>
        <h5>Create New User</h5>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
            placeholder="Enter user name"
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Create User</button>
      </form>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Show Existing Users
        </button>
        <ul className="dropdown-menu">
          {users.length === 0 ? (
            <li className="dropdown-item text-muted">No users found</li>
          ) : (
            users.map((user, index) => (
              <li key={index}>
                <button className="dropdown-item" onClick={() => navigate(user.userName)}>
                  {user.userName} - ₹{user.balance || 0}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

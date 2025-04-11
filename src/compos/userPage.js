import React, { useEffect, useState,useCallback  } from 'react';
import { useParams } from 'react-router-dom';

export default function UserPage() {
  const { userId } = useParams();
  console.log(userId);
  
  const [userData, setUserData] = useState(null);
  const [amount, setAmount] = useState('');

  const fetchSingleUser = useCallback(async () => {
    try {
      const res = await fetch(`https://adduseradminpanel-backend-final.onrender.com/v1/api/user/${userId}`);
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [userId]);
  
  useEffect(() => {
    fetchSingleUser();
  }, [fetchSingleUser]);
  

  const handleTransaction = async (type) => {
    const numericAmount = Number(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return alert("Enter a valid amount!");
    }

    try {
      const res = await fetch(`https://adduseradminpanel-backend-final.onrender.com/v1/api/user/${userId}/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: numericAmount })
      });

      const result = await res.json();

      if (res.status === 200) {
        alert(result.message || `${type === "add" ? "Added" : "Withdrawn"} successfully!`);
        setAmount('');
        fetchSingleUser(); 
      } else {
        alert(result.message || "Transaction failed.");
      }

    } catch (error) {
      console.error("Transaction error:", error);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary">Hi, {userId}</h2>

      {userData ? (
        <div className="card p-4 shadow-sm">
          <h4 className="text-success mb-3">
            Current Balance: ₹{userData.balance}
          </h4>

          <div className="mt-4">
            <label className="form-label">Enter Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-control mb-3"
              placeholder="Enter amount"
            />

            <div className="d-flex gap-2">
              <button
                className="btn btn-success w-50"
                onClick={() => handleTransaction("add")}
              >
                Add Money
              </button>
              <button
                className="btn btn-danger w-50"
                onClick={() => handleTransaction("withdraw")}
              >
                Withdraw Money
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FrontPage() {

    const navigator = useNavigate();

    return (
        <div className='container mt-5'>
            <h1 className='heading d-flex justify-content-center'>EsspeSoft</h1>
            <div className="buttons d-flex justify-content-center" style={{
                marginTop:"20rem"
            }}>
                <button
                    className='btn m-4'
                    id='userButton'
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        width:"20%",
                        height:"4rem",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseOver={(e)=> e.currentTarget.style.backgroundColor = "#0056b3"}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
                      onClick={(e) => navigator('/userLogin')}
                      >User</button>
                <button
                    className='btn m-4'
                    id='adminButton'
                    style={{
                        padding: "10px 20px",
                        width:"20%",
                        height:"4rem",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseOver={(e)=> e.currentTarget.style.backgroundColor = "#0056b3"}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
                      onClick={() => navigator('/home')}
                    >Admin</button>
            </div>
        </div>
    );
}

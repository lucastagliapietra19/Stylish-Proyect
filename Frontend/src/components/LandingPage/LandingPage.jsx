import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/landingpage.css'; 


const LandingPage = () => {
    const navigate = useNavigate();

    const handleEnterToHomePage = () => {
        navigate('/homePage'); 
    }

    return (
        <div className="landing-page">
            <div className="landing-header">
                <h1>Bienvenido a Stylish</h1>
                <p>peluqueria</p>
            </div>
            <div className="landing-content">
                <button className="enter-button" onClick={handleEnterToHomePage}>
                    <img src="" alt="Logo" />
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
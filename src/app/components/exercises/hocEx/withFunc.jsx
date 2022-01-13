import React, { useState, useEffect } from "react";

const withFunc = (Compenent) => (props) => {
    const [state, setState] = useState(localStorage.getItem("user"));
    useEffect(() => {
        setState(!state);
    }, []);
    const handleLogin = () => {
        console.log("Login");
        localStorage.setItem("user", true);
        setState(!state);
    };

    const handleLogOut = () => {
        console.log("LogOut");
        localStorage.removeItem("user");
        setState(!state);
    };
    return (
        <>
            <Compenent
                {...props}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </>
    );
};

export default withFunc;

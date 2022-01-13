import React, { useEffect, useState } from "react";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
    useEffect(() => {
        setIsAuth(localStorage.getItem("user") !== null);
    }, [isAuth]);
    return <Component {...props} isAuth={isAuth} />;
};

export default withAuth;

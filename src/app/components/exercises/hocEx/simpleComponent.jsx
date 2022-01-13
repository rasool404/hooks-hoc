import React, { useState } from "react";
import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const [state, setState] = useState(isAuth);

    const handleLogin = () => {
        if (onLogin) {
            onLogin();
            setState(!state);
        }
    };

    const handleLogOut = () => {
        if (onLogOut) {
            onLogOut();
            setState(!state);
        }
    };
    return (
        <Subtitle>
            {!state ? (
                <button className="btn btn-primary" onClick={handleLogin}>
                    Войти
                </button>
            ) : (
                <button className="btn btn-secondary" onClick={handleLogOut}>
                    Выйти из системы
                </button>
            )}{" "}
        </Subtitle>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;

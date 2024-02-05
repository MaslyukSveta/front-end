import React from 'react';

const RegisterButton = ({ onClick }) => {
    return (
        <button type="submit" onClick={onClick}>
            Register
        </button>
    );
};

export default RegisterButton;

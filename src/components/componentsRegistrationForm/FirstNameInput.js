import React from 'react';

const FirstNameInput = ({ value, onChange, error }) => {
    return (
        <div>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={value}
                onChange={onChange}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default FirstNameInput;

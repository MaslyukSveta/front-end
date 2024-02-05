import React from 'react';

const LastNameInput = ({ value, onChange, error }) => {
    return (
        <div>
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={value}
                onChange={onChange}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default LastNameInput;

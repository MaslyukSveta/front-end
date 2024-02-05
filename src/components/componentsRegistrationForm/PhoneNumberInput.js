import React from 'react';

const PhoneNumberInput = ({ value, onChange, error }) => {
    return (
        <div>
            <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={value}
                onChange={onChange}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default PhoneNumberInput;

import React from 'react';

const GenderSelect = ({ value, onChange, error }) => {
    return (
        <div>
            <select name="gender" value={value} onChange={onChange}>
                <option value="" disabled>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default GenderSelect;

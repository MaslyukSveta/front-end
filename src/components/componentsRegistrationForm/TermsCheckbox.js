import React from 'react';

const TermsCheckbox = ({ checked, onChange, error }) => {
    return (
        <div>
            <input
                type="checkbox"
                name="agree"
                checked={checked}
                onChange={onChange}
            /> I agree to the terms and conditions
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default TermsCheckbox;

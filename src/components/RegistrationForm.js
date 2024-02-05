import React, { useState } from 'react';
import FirstNameInput from "./componentsRegistrationForm/FirstNameInput";
import LastNameInput from "./componentsRegistrationForm/LastNameInput";
import PhoneNumberInput from "./componentsRegistrationForm/PhoneNumberInput";
import GenderSelect from "./componentsRegistrationForm/GenderSelect";
import TermsCheckbox from "./componentsRegistrationForm/TermsCheckbox";
import RegisterButton from "./componentsRegistrationForm/RegisterButton";
import validateForm from "../utils/validateForm";
import userService from "../services/userService";
import resetForm from "./componentsRegistrationForm/resetForm";
import './formStyles.css';

const RegistrationForm = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        agree: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setUser({
            ...user,
            [name]: type === 'checkbox' ? checked : value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(user);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const data = await userService.registerUser(user);
            console.log(data);
            resetForm(setUser, setErrors);
            alert('Registration successful!');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FirstNameInput value={user.firstName} onChange={handleChange} error={errors.firstName}/>
            <LastNameInput value={user.lastName} onChange={handleChange} error={errors.lastName}/>
            <PhoneNumberInput value={user.phoneNumber} onChange={handleChange} error={errors.phoneNumber}/>
            <GenderSelect value={user.gender} onChange={handleChange} error={errors.gender}/>
            <TermsCheckbox checked={user.agree} onChange={handleChange} error={errors.agree}/>
            <RegisterButton />
        </form>
    );

};

export default RegistrationForm;

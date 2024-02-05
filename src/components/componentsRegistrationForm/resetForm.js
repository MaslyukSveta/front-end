const initialFormState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    agree: false
};

const resetForm = (setUser, setErrors) => {
    setUser(initialFormState);
    setErrors({});
};

export default resetForm;

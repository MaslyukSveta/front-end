const validateForm = (user) => {
    let errors = {};

    if (!user.firstName) {
        errors.firstName = 'First name is required';
    }

    if (!user.lastName) {
        errors.lastName = 'Last name is required';
    }

    if (!user.phoneNumber) {
        errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d+$/.test(user.phoneNumber)) {
        errors.phoneNumber = 'Phone number must be numeric';
    }

    if (!user.gender) {
        errors.gender = 'Gender is required';
    }

    if (!user.agree) {
        errors.agree = 'You must agree to the terms and conditions';
    }

    return errors;
};

export default validateForm;

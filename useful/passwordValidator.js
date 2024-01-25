const passwordValidator = (password) => {
    if (!password)
        return 'Password is required';
    if (password.length < 8)
        return 'Password must be at least 8 characters';
    return '';
}
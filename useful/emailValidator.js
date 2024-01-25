const emailValidator = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if(!regex.test(email)) return 'Email is not valid';

    return '';
}
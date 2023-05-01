export const getCurrentAccessToken = () => {
    return localStorage.getItem('_token');
};

export const setCurrentAccessToken = (token: string) => {
    return localStorage.setItem('_token', token);
};

export const removeCurrentAccessToken = () => {
    return localStorage.removeItem('_token');
};

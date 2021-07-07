import { useState, useEffect, useCallback } from "react";
export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [name, setName] = useState(null);
    const login = useCallback((userData) => {
        setToken(userData.token);
        setUserId(userData.id);
        setName(userData.name);
        localStorage.setItem('userData', JSON.stringify({
            id: userData.id,
            name: userData.name,
            token: userData.token
        }))
    }, [])
    const logout = () => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem('userData');
    }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data && data.token) {
            login(data)
        }
        setIsReady(true);
    }, [login]);
    return {
        login, logout, token, userId, isReady, name
    }
}
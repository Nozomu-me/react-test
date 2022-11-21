import React, { useEffect, useState } from 'react';

export const UserContext = React.createContext({
    user: '',
    setUser: () => {},
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userLocal = localStorage.getItem('user');
        if (userLocal !== null && user === null) {
            setUser(JSON.parse(userLocal));
        }
    }, [setUser, user]);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


import { createContext, useState } from 'react';

export const loginContext = createContext(null);

export default function LoginContext({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        id: 1,
        name: 'Dummy Name',
        email: 'dummy@xyz.com',
        contact: 9999999999,
        password: 'abcdefg'
    });

    const login = (user) => {
        // validation for existing user details
        setCurrentUser(user);
        setIsLoggedIn(true);
    }
    const logout = () => {
        setCurrentUser(null);
        setIsLoggedIn(false);
    }

    const signup = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
        console.log(users);
    }

    return (
        <div>

            <loginContext.Provider value={{ isLoggedIn, currentUser, login , logout}}>
                {children}
            </loginContext.Provider>

        </div>
    )
}

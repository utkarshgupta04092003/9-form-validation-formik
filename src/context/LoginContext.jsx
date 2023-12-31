
import { createContext, useState } from 'react';

export const loginContext = createContext(null);

export default function LoginContext({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        id: 1,
        firstname: 'Dummy first Name',
        lastname: 'dummy last name',
        email: 'dummy@xyz.com',
        contact: 9999999999,
        password: 'abcdefg',
    });

    const login = (user) => {
        // validation for existing user details
        console.log('from login function',user)
        setCurrentUser(user);
        setIsLoggedIn(true);
    }
    const logout = () => {
        setCurrentUser(null);
        setIsLoggedIn(false);
    }

    const signup = (user) => {
        
        console.log('values: ',user);
        for(let i=0;i<users.length;i++){
            if(users[i].email == user.email){
                alert('User already exist.\nGo to Login');
                return;
            }
        }
        setUsers((prevUsers) => [...prevUsers, user]);
        alert('Registered Successfully.')
        console.log(users);
    }

    return (
        <div>

            <loginContext.Provider value={{users, isLoggedIn, currentUser, login , logout, signup}}>
                {children}
            </loginContext.Provider>

        </div>
    )
}

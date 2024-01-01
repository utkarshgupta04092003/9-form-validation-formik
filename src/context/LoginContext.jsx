
import { createContext, useState } from 'react';

export const loginContext = createContext(null);

export default function LoginContext({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const login = (user) => {
        // validation for existing user details
        console.log('from login function',user);
        for(let i=0;i<users.length;i++){
            if(users[i].email === user.email && users[i].password === user.password){
                setCurrentUser(users[i]);
                setIsLoggedIn(true);
                alert('Logged in successfully.');
                return;
            }
        }

        alert('Invalid email/password');

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

import { useContext } from 'react';
import { loginContext } from '../context/LoginContext';

export default function Home() {


    const {currentUser, login, logout} = useContext(loginContext);
    console.log('current user from home', currentUser);
    // console.log('login user from home', isLoggedIn);
    return (
        <div>
            <h1 className='font-bold text-2xl'>Home Page</h1>


            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>

        </div>
    )
}

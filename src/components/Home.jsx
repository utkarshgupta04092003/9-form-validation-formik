import { useContext } from 'react';
import { loginContext } from '../context/LoginContext';

export default function Home() {


    const {currentUser, login, logout, users} = useContext(loginContext);
    console.log('current user from home', currentUser? currentUser : 'not defined');
    // console.log('login user from home', isLoggedIn);
    console.log('all users from home',users);
    return (
        <div>



            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>

            <ul>

            {users.map((user,index)=>(
                <li key={index}> {user.firstname+'-'+user.lastname}</li>
                ))}
            <h1 className='font-bold text-2xl'>Home Page</h1>
            </ul>
            
            <div className="font-bold">current user : {currentUser?.firstname}</div>
        
        </div>
    )
}

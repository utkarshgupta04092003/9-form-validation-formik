import { useContext } from 'react';
import { loginContext } from '../context/LoginContext';
import UserProfile from './UserProfile';

export default function Home() {


    const {currentUser, login, logout, users} = useContext(loginContext);
    console.log('current user from home', currentUser? currentUser : 'not defined');
    // console.log('login user from home', isLoggedIn);
    console.log('all users from home',users);
    return (
        <div>

            <ul>

            {/* {users.map((user,index)=>(
                <li key={index}> {user.firstname+'-'+user.lastname}</li>
                ))} */}
            </ul>
            <h1 className='font-bold text-2xl '>Dashboard</h1>
            
            <div className="font-bold">current user :  <p>{currentUser ? (<UserProfile/>) :'No Logged In user'}</p></div>


            
        
        </div>
    )
}

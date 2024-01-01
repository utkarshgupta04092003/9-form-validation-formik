import React, {useContext} from 'react';
import { loginContext } from '../context/LoginContext';
import profile from '../profile.jpg';
const UserProfile = () => {


    const {currentUser} = useContext(loginContext);
    const user = currentUser;

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-center">
        <img
          src={profile}
          alt={`${user.firstname} ${user.lastname}`}
          className="w-16 h-16 rounded-full"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800 capitalize">
          {user.firstname} {user.lastname}
        </h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.contact}</p>
      </div>

      
    </div>
  );
};

export default UserProfile;

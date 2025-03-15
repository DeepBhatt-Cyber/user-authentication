import React from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/user/userSlice';

export default function OAuth() {
    const dispatch = useDispatch();
    const handleGoogleClick = async () => {
        try {
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);
          const result = await signInWithPopup(auth, provider);
          const response = await fetch("/api/auth/google", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ 
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,  
            }),
          })
          const data = await response.json();
          dispatch(loginSuccess(data));
        } catch (error) {
          console.log("Cannot sign in with Google", error);
        }
      };
  return (
    <div>
      <button type='button' onClick={handleGoogleClick} className='bg-red-700  w-full text-white p-3 rounded-lg uppercase hover:bg-red-800'>Continue with Google</button>    
    </div>
  )
}

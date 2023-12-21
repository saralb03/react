import { useEffect, useContext } from 'react';
import { auth } from '../firebase/config'; // Adjust the path based on your file structure
import { signOut } from 'firebase/auth';
import { AppContext } from '../context/context';

export const useLogout = () => {
  const { setUid } = useContext(AppContext);

  const logout = async () => {
    try {
      await signOut(auth);
      console.log('logged out');
      setUid(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Use useEffect to run the logout function when the component unmounts
  useEffect(() => {
    return () => {
      logout();
    };
  }, []); // The empty dependency array means it will run once when the component mounts and cleanup on unmount

  return { logout };
};

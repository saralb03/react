import { useLogout } from "../hooks/useLogout";

const LogOut = () => {
  
  const {logout} = useLogout();

  return (
    <button onClick={() => {
      logout();
    }}>log out</button>
  );
};

export default LogOut;

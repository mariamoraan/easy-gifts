import { useAuth } from "./auth/delivery/context/auth.context";

export const Home = () => {
  const { logout, user } = useAuth();
  return (
    <div>
      <p>Home</p>
      <p>{user?.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

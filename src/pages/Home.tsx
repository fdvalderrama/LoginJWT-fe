import { useNavigate } from "react-router-dom";
import { useAuth } from "../api/useAuth";

const Home = () => {
  const navigate = useNavigate();

  const { isLoading } = useAuth({
    endpoint: "api/validateToken",
    isGetMethod: true,
  });

  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-2xl">Cargando...</div>
      </div>
    );
  } else {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-7xl mb-10">Home</h1>

        <button
          onClick={logout}
          className="bg-gray-300 active:bg-gray-400 rounded-4xl px-10 py-2 cursor-pointer"
        >
          Log out
        </button>
      </div>
    );
  }
};

export default Home;

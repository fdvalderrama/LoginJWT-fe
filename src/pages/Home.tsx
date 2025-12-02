import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

const Home = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        await api.get("validateToken");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    validateToken();
  }, []);

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

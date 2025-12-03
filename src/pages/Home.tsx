import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/axiosConfig";
import Loading from "../components/Loading";

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
    return <Loading />;
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

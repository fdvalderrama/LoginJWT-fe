import { useEffect } from "react";
import { BaseUrl } from "../services/BaseUrl";

const Home = () => {
  useEffect(() => {
    const result = async (): Promise<void> => {
      try {
        const response = await BaseUrl.get("/Users");
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    result();
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-4xl font-bold">We get it</h1>
    </div>
  );
};

export default Home;

import { useEffect, useState, type FC, type ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRoutePropt {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRoutePropt> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const verifyToken = async (): Promise<void> => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      const response = await fetch("http://localhost:5282/api/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authentication: `Bearer ${token}`,
        },
      });

      const data = await response.json();
    };

    verifyToken();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

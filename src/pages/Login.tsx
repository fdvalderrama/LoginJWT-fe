import { useState, type ChangeEvent, type FormEvent } from "react";
import type { LoginRequest } from "../types/LoginRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value } = e.target;

    setLoginRequest((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5282/api/Auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });

      if (!response.ok) {
        alert("Credenciales invalidas");
        return;
      }

      const data = await response.text();
      localStorage.setItem("token", data);

      console.log(data);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold underline mb-12">Login Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2"
          value={loginRequest.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2"
          value={loginRequest.password}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

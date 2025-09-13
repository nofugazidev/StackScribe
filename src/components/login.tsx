import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const auth = useAuth();
  if (!auth) {
    throw new Error("AuthContext is not available");
  }

  const { login } = auth;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("password or username is invalid");
      } else {
        alert("unknown error");
      }
    }
  };
  return (
    <>
      <main className="mx-auto max-w-[1400px] p-4">
        <header className="logo">
          <Link
            to="/"
            className="cursor-pointer md:text-4xl text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            StackScribe
          </Link>
        </header>

        <form
          className="flex items-center justify-center mx-auto flex-col gap-3 md:gap-5 mt-10 md:mt-32"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col items-start justify-start gap-1">
            <label htmlFor="email" className="font-medium capitalize text-sm">
              email
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter your email here..."
              required
              className="outline-none border-2 border-solid border-gray-300 focus:border-purple-700 px-2 py-3 md:px-4 md:py-5 w-[300px] md:w-[400px] rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-1">
            <label
              htmlFor="password"
              className="font-medium capitalize text-sm"
            >
              password
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter your password..."
              required
              className="outline-none border-2 border-solid border-gray-300 focus:border-purple-700 px-2 py-3 md:px-4 md:py-5 w-[300px] md:w-[400px] rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-[300px] md:w-[400px] rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 md:py-5 text-white font-medium cursor-pointer"
          >Login</button>
        </form>
        <p className="mx-auto items-center justify-center flex mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="underline font-medium">
            {" "}
            Register
          </Link>
        </p>
      </main>
    </>
  );
};

export default Login;

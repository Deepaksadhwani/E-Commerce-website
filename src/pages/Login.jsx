import { useState } from "react";

const Login = ({ onAddLogin }) => {
  const [isSignIn, setIsSign] = useState(true);
  return (
    <div className="relative">
      <img
        src="https://i.postimg.cc/wBX7jCR7/Designer.png"
        className="absolute h-full w-full object-cover"
        alt=""
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10  flex h-screen flex-col items-center justify-center">
        <div className=" flex flex-col items-center justify-center gap-y-2 rounded-lg bg-gradient-to-tl from-gray-600 via-gray-700 to-gray-800 p-10 py-16">
          <h1 className="mb-6 text-center text-2xl font-semibold text-gray-300">
            Sign In
          </h1>
          <input
            type="text"
            className="mb-2 rounded border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
            placeholder="Username"
          />
          <input
            type="password"
            className="mb-2 rounded border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
            placeholder="Password"
          />
          <button
            onClick={() => onAddLogin((prev) => !prev)}
            className="w-full rounded bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none"
          >
             { isSignIn ? "Sign In" : "Sign Up" }
          </button>
          <p className=" pt-6 text-gray-300 font-semibold">
            {isSignIn
              ? "New to Store ? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useContext, useRef, useState } from "react";
import { checkValidaData } from "../utils/validate";
import { CartContext } from "../contexts/CartContextProvider";

const Login = ({ onShowPage }) => {
  const [isSignIn, setIsSign] = useState(true);
  const [error, setError] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const { loginHandler } = useContext(CartContext);

  const toggleSignInForm = () => {
    setIsSign((prev) => !prev);
  };

  const clickButtonHandler = async () => {
    const nameValue = name?.current?.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidaData(nameValue, emailValue, passwordValue);
    setError(message);
    if (message) return;

    if (!isSignIn) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvxV-KzJD5h2_F7XOq4dDRaoAJH3NPNFY",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        //
      } else {
        // show mortal
        setError(data.error.message);
        console.log(data);
      }
    } else {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvxV-KzJD5h2_F7XOq4dDRaoAJH3NPNFY",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
      } else {
        // show mortal
        setError(data.error.message);
        console.log(data);
      }
      loginHandler(data.idToken);
      onShowPage(prev => !prev)
    }
  };

  return (
    <div className="relative">
      <img
        src="https://i.postimg.cc/wBX7jCR7/Designer.png"
        className="absolute h-full w-full object-cover"
        alt=""
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10  flex h-screen flex-col items-center justify-center">
        <div className=" flex flex-col items-center justify-center gap-y-2 rounded-lg bg-gradient-to-tl from-gray-600 via-gray-700  to-gray-800 p-10 py-10">
          <h1 className="mb-6 text-center text-2xl font-semibold text-gray-300">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              className="mb-2 rounded border border-gray-800 px-4 py-2 focus:border-red-500 focus:outline-none"
              placeholder="Name"
              ref={name}
            />
          )}
          <input
            type="email"
            className="mb-2 rounded border border-gray-800 px-4 py-2 focus:border-red-500 focus:outline-none"
            placeholder="Email"
            ref={email}
          />
          <input
            type="password"
            className="mb-2 rounded border border-gray-800 px-4 py-2 focus:border-red-500 focus:outline-none"
            placeholder="Password"
            ref={password}
          />
          <button onClick={clickButtonHandler} className="  btn-red ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="pt-2 font-medium text-red-800 ">{error}</p>
          <p
            onClick={toggleSignInForm}
            className=" cursor-pointer  font-semibold text-gray-300"
          >
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

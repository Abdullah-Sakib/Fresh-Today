import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate();
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const role = e.target.account.value;
    const username = name.current.value;
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const user = { role, username, userEmail, userPassword };

    if (userPassword.length < 6) {
      setPasswordError('Password should be at least 6 characters.');
      return;
    }
    setPasswordError('');
    console.log(user);

    try {
      fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }

    e.target.reset();
    navigate("/login");
  };
  return (
    <form
      onSubmit={handleRegisterForm}
      className="flex w-full max-w-sm mx-auto overflow-hidden my-20 bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-6xl"
    >
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1627133833133-adbd0b0e0e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
        }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
          Welcome to Fresh Today
        </h2>

        {/* <p className="text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p> */}

        <a
          href="/"
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Register in with Google
          </span>
        </a>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or Register with email
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="LoggingEmailAddress"
          >
            Select Account Type
          </label>
          <div className="flex justify-between">
            <div className="flex items-center w-6/12 pl-4 mb-4 mr-4 rounded border border-gray-200 dark:border-gray-700 ">
              <input
                defaultChecked
                id="account-1"
                type="radio"
                value="buyer"
                name="account"
                className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 radio radio-success"
              />
              <label
                htmlFor="account-1"
                className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Buyer Account
              </label>
            </div>
            <div className="flex items-center w-6/12 pl-4 mb-4 rounded border border-gray-200 dark:border-gray-700">
              <input
                id="bordered-radio-2"
                type="radio"
                value="vendor"
                name="account"
                className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 radio radio-success"
              />
              <label
                htmlFor="bordered-radio-2"
                className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vendor Account
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="registerName"
          >
            Name
          </label>
          <input
            required
            ref={name}
            id="registerName"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-green-300"
            type="text"
          />
        </div>
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            required
            ref={email}
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-green-300"
            type="email"
          />
        </div>

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="loggingPassword"
          >
            Password
          </label>

          <input
            required
            ref={password}
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-green-300"
            type="password"
          />
        </div>
        <p className="text-red-700 mt-4">
          {passwordError}
        </p>

        <div className="mt-6">
          <button
            type="submit"
            style={{ backgroundColor: `#22C55E` }}
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Register
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/login"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or Log in
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </form>
  );
};

export default Register;

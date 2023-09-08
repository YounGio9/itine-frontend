import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between p-4 sm:mx-auto max-w-screen-xl md:mt-20">
        <div className="md:w-1/2 p-16 hidden md:block">
          <img
            src={logo}
            alt="imgLogin"
            className="w-auto"
          />
        </div>

        <div className="md:w-1/2 w-full ">
          <h1 className=" text-4xl font-bold text-center mb-5 text-red-600">Connectez vous</h1>
          {/* Form of login */}
          <form>
            {/*Input E-mail*/}
            <input
              className="text-sm w-full px-4 py-4 border border-gray-300 rounded-lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
            {/*Input password*/}
            <div className="relative container">
              <input
                className=" my-4 text-sm w-full px-4 py-4 border border-gray-300 rounded-lg "
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                required
                name="password"
                id="passwordlogin"
              />
              <label
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </label>
            </div>

            <div className=" mb-2 flex justify-end font-semibold text-sm">
              <Link
                className="text-gray-600 hover:text-red-700 hover:underline hover:underline-offset-4"
                to="#"
              >
                Mot de passe oublié?
              </Link>
            </div>

            {/*Boutton conexion*/}
            <div className=" flex justify-center">
              <button
                className=" my-4 bg-[#DC3545] hover:bg-red-700 w-full h-10 md:w-80 px-4 py-2 text-white rounded-md tracking-wider flex justify-center items-center font-bold text-sm"
                type="submit"
              >
                Connexion
              </button>
            </div>
          </form>

          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-center">
            Vous n'avez pas de compte ?
            <Link
              to="/register"
              className=" mx-2 text-[#b86165] hover:underline hover:underline-offset-4 hover:text-red-700"
            >
              Inscrivez-vous
            </Link>
          </div>
        </div>


      </div>
    </div>
  )
}

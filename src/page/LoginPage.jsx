import React, { useState } from "react";
import Footer from "../../components/footer";
import SignUpPage from "../../components/SignUpPage";

const LoginPage = () => {
const [login,setLogin]=useState(false)
console.log(login);

  return (
   <>
   {!login?
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800" >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl latest">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className=" cursor-pointer">Forgot your password?</p>
        <p className=" cursor-pointer" onClick={()=>setLogin(true)}>Create account</p>
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        Sign In{" "}
      </button>
    </form>:<SignUpPage setLogin={setLogin} />}
    <Footer></Footer>
   </>
  );
};

export default LoginPage;

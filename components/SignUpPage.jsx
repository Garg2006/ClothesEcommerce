import React from "react";

const SignUpPage = ({setLogin}) => {
  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className=" text-3xl latest">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Name"
      />
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className=" cursor-pointer">Forgot your password?</p>
        <p className=" cursor-pointer" onClick={()=>setLogin(false)}>Login Here</p>
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpPage;

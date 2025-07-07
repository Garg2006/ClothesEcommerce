const Subscribe = () => {
  return (
    <div className="text-center">
        <h1 className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</h1>
        <p className="text-gray-400 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form className="w-full sm:w-[70%] flex items-center gap-3 mx-auto my-6 border pl-3 " >
            <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none" required/>
            <button className="bg-black text-white  right-0 px-10 py-4 cursor-pointer">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Subscribe


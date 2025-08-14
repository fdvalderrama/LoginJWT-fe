import autoworkshop from "../assets/automotive-workshop.jpg";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="relative w-full md:w-7/12 h-64 md:h-screen flex justify-center items-center">
        <img
          src={autoworkshop}
          alt="Automotive workshop"
          className="absolute h-full w-full object-cover"
        />
        <h1 className="relative font-bold text-3xl md:text-5xl text-white drop-shadow-lg">
          Mechashop
        </h1>
      </div>
      <div className="w-full md:w-5/12 flex flex-col justify-center items-center py-8 md:py-0">
        <h2 className="font-bold text-3xl md:text-3xl mb-6 md:mb-12">Login</h2>
        <form className="flex flex-col gap-3 md:gap-4 w-10/12 md:w-7/12 justify-center">
          <input
            type="text"
            placeholder="Username"
            className="bg-gray-300 p-4 md:p-3 rounded-2xl mb-4 md:mb-5 text-base md:text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-300 p-4 md:p-3 rounded-2xl mb-4 md:mb-5 text-base md:text-lg"
          />
          <button
            type="submit"
            className="bg-gray-600 text-white p-3 md:p-3 rounded-2xl w-8/12 mx-auto text-xl md:text-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

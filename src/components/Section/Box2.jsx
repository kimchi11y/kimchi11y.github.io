import elgato from "../../assets/elgato.jpg";

const Box2 = () => {
    return (
      <div className=" glass-box col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
        <div>
          
          <div className="flex justify-center items-center "><img className="w-1/2 rounded-full "src={elgato} /></div>
          <div className="mt-6 text-center relative z-10 space-y-2">
            <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950"></h2>
            <p className="text-gray-700">
              
            </p>
          </div>
   
      </div>
      </div>
    );
  };
  
  export default Box2;
  
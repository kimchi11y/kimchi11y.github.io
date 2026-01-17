import selfie from "../assets/selfie.jpg";
import { useState } from "react";
export default function Header(props) {

    const [goofy, setGoofy] = useState(true);
  function handleClick() {
        setGoofy(!goofy);   
  }
    return (
        <div className="container mx-auto px-5 max-w-4xl">
            <div className="flex justify-center">
                <img src={selfie} alt="Profile" className="rounded-full object-cover w-32 h-32 md:w-48 md:h-48 mt-3" />
            </div>
            <h1 className="text-black pt-6 font-semibold text-3xl md:text-5xl">
                Hi, I'm <span className="text-blue-700"> {props.name}👋 </span>
            </h1>
            <p className="text-black text-lg md:text-xl">
                Software developer  wannabe who loves to build things and learn new stuff.
            </p>
            {/*use backticks ``when putting stuff like this ${}*/ }
            <button className={`p-2 rounded-xl text-white transition delay-150 duration-300 ease-in-out hover:bg-green-500 hover:scale-110 ${goofy ? 'bg-green-400' : 'bg-purple-400'}`} onClick={handleClick}>{goofy ? 'Professional Mode'  : 'Goofy ahh Mode'}</button>
        </div>
    );
}

import selfie from "../assets/selfie.jpg";
import { useState } from "react";
export default function Header(props) {

    const [goofy, setGoofy] = useState(true);
  function handleClick() {
        setGoofy(!goofy);   
  }
    return (
        <div className="container mx-auto px-5 max-w-4xl">
            <div className="">
                <img src={selfie} alt="Profile" className="rounded-full object-cover w-32 h-32 md:w-48 md:h-48" />
            </div>
            <h1 className="text-black pt-9 font-semibold text-3xl md:text-5xl">
                Hi, I'm <span className="text-blue-700"> {props.name}👋 </span>
            </h1>
            <p className="text-black text-lg md:text-xl">
                Software developer  wannabe who loves to build things and learn new stuff.
            </p>
            <button className="bg-green-400 p-2 rounded-xl text-white" onClick={handleClick}>{goofy ? 'Professional Mode' : 'Goofy ahh Mode'}</button>
        </div>
    );
}

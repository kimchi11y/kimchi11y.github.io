import elgato from "../assets/elgato.jpg";

export default function Header() {
    return (
        <div className="container mx-auto px-5 max-w-4xl">
            <div className="">
                <img src={elgato} alt="Profile" className="rounded-2xl w-32 h-32 md:w-48 md:h-48" />
            </div>
            <h1 className="text-black pt-9 font-semibold text-3xl md:text-5xl">
                Hi, I'm <span className="text-blue-700"> Hakim👋 </span>
            </h1>
            <p className="text-black text-lg md:text-xl">
                Software developer  wannabe who loves to build things and learn new stuff.
            </p>
        </div>
    );
}

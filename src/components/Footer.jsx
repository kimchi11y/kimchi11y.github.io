import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return(
        <div>
            <div className="container mx-auto px-5 max-w-4xl py-4 pt-10 text-center text-black">
                <p>&copy; 2024 Hakim. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-4 text-3xl">
                    <a href="https://github.com/kimchi11y"><FaGithub /></a>
                    <a href="www.linkedin.com/in/hakim-razak-239aaa283"><FaLinkedin/></a>
                </ul>


            </div>
        </div>
    );
}
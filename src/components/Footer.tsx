import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-black/30 backdrop-blur-xl text-white py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Nikesh Kumar
            </h2>

            <p className="text-gray-400 mt-2">
              Full Stack AI Developer
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/itsmenikeshraj99"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nikesh-kumar-4a5425187"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Nikesh Kumar. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="bg-cyan-500 hover:bg-cyan-400 p-3 rounded-full transition"
          >
            <FaArrowUp className="text-black" />
          </button>

        </div>

      </div>

    </footer>
  );
}
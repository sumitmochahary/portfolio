import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello, World! I'm a Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Terminal Window */}
          <div className="bg-gray-950 rounded-lg shadow-2xl border border-gray-800 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-gray-400 text-sm font-mono">
                developer@portfolio:~$
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm md:text-base">
              <div className="mb-4">
                <span className="text-green-400">$ </span>
                <span className="text-gray-100">{displayText}</span>
                <span className="animate-pulse">_</span>
              </div>

              <div className="space-y-2 mt-6">
                <p className="text-gray-400">
                  <span className="text-purple-400">const</span> developer ={" "}
                  {"{"}
                </p>
                <p className="text-gray-400 ml-4">
                  <span className="text-blue-400">name</span>:{" "}
                  <span className="text-green-400">'Sumit Mochahary'</span>,
                </p>
                <p className="text-gray-400 ml-4">
                  <span className="text-blue-400">role</span>:{" "}
                  <span className="text-green-400">'Full Stack Developer'</span>
                  ,
                </p>
                <p className="text-gray-400 ml-4">
                  <span className="text-blue-400">location</span>:{" "}
                  <span className="text-green-400">'Itanagar'</span>,
                </p>
                <p className="text-gray-400 ml-4">
                  <span className="text-blue-400">languages</span>: [
                  <span className="text-yellow-400">'Java'</span>,{" "}
                  <span className="text-yellow-400">'JavaScript'</span>,{" "}
                  <span className="text-yellow-400">'TypeScript'</span>,{" "}
                  <span className="text-yellow-400">'Python'</span>]
                </p>
                <p className="text-gray-400 ml-4">
                  <span className="text-blue-400">interests</span>: [
                  <span className="text-yellow-400">'Web Dev'</span>,{" "}
                  <span className="text-yellow-400">'Open Source'</span>,{" "}
                  <span className="text-yellow-400">'AI/ML'</span>]
                </p>
                <p className="text-gray-400">{"}"}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-green-600 text-gray-900 px-6 py-2 rounded font-bold hover:bg-green-500 transition-colors duration-200 text-sm"
                >
                  ./view-projects.sh
                </a>
                <a
                  href="#contact"
                  className="border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  ./contact-me.sh
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

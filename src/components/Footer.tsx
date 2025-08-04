const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Terminal Info */}
          <div className="font-mono text-sm">
            <p className="text-green-400 mb-2">$ whoami</p>
            <p className="text-gray-400">developer@portfolio</p>
            <p className="text-gray-500 mt-2">Full Stack Developer</p>
          </div>

          {/* Quick Links */}
          <div className="font-mono text-sm">
            <p className="text-green-400 mb-2">$ ls -la /links</p>
            <div className="space-y-1">
              <a
                href="#home"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                drwxr-xr-x home/
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                drwxr-xr-x about/
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                drwxr-xr-x projects/
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                -rw-r--r-- contact.txt
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="font-mono text-sm">
            <p className="text-green-400 mb-2">$ git remote -v</p>
            <div className="space-y-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                origin https://github.com/sumitmochahary (fetch)
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                linkedin https://www.linkedin.com/in/sumitmochahary/ (fetch)
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                twitter https://x.com/sumitmochahary (fetch)
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 font-mono text-sm">
            <span className="text-green-400">$</span> echo "© {currentYear}{" "}
            Sumit Mochahary" | <span className="text-blue-400">figlet</span>
          </p>
          <p className="text-gray-500 font-mono text-xs mt-4">
            <span className="text-yellow-400">[*]</span> Built with React + Vite
            + Tailwind CSS |<span className="text-green-400"> Status: </span>200
            OK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


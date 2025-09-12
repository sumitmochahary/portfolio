const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 font-mono">
            <span className="text-green-400">$</span> cat about.md
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Code Editor Style About */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            {/* Editor Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">about.md</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              </div>
            </div>

            {/* Editor Content */}
            <div className="p-6 font-mono text-sm">
              <div className="space-y-4">
                <p className="text-blue-400"># About Me</p>

                <p className="text-gray-300">
                  I'm a{" "}
                  <span className="text-green-400">
                    **passionate full-stack developer**
                  </span>{" "}
                  with a love for creating beautiful, functional web
                  applications.
                </p>

                <p className="text-gray-300">
                  With expertise in{" "}
                  <span className="text-yellow-400">
                    modern web technologies
                  </span>
                  , I enjoy turning complex problems into simple, elegant
                  solutions.
                </p>

                <p className="text-blue-400">## What I Do</p>

                <ul className="space-y-2 ml-4">
                  <li className="text-gray-300">
                    - 🚀 Build scalable web applications
                  </li>
                  <li className="text-gray-300">
                    - 💡 Create intuitive user interfaces
                  </li>
                  <li className="text-gray-300">
                    - 🔧 Optimize performance and security
                  </li>
                  <li className="text-gray-300">
                    - 📚 Share knowledge through open source
                  </li>
                </ul>

                <p className="text-blue-400">## Beyond Coding</p>

                <p className="text-gray-300">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through blog posts and tutorials.
                </p>
              </div>
            </div>
          </div>

          {/* Terminal Style Info */}
          <div className="space-y-6">
            {/* Git Profile */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <p className="text-green-400 font-mono text-sm mb-4">
                $ git log --author="Developer" --oneline
              </p>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-gray-400">
                  <span className="text-yellow-400">a1b2c3d</span> feat:
                  Implemented new authentication system
                </p>
                <p className="text-gray-400">
                  <span className="text-yellow-400">e4f5g6h</span> fix: Resolved
                  performance issues in dashboard
                </p>
                <p className="text-gray-400">
                  <span className="text-yellow-400">i7j8k9l</span> docs: Updated
                  API documentation
                </p>
                <p className="text-gray-400">
                  <span className="text-yellow-400">m0n1o2p</span> refactor:
                  Improved code structure
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <p className="text-green-400 font-mono text-sm mb-4">
                $ ls -la ~/social-links/
              </p>
              <div className="space-y-2 font-mono text-sm">
                <a
                  href="https://github.com/sumitmochahary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-green-400 px-3 py-3 transition-colors"
                >
                  drwxr-xr-x <span className="text-blue-400">github</span>/
                </a>
                <a
                  href="https://www.linkedin.com/in/sumitmochahary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-green-400 px-3 py-3 transition-colors"
                >
                  drwxr-xr-x <span className="text-blue-400">linkedin</span>/
                </a>
                <a
                  href="https://x.com/sumitmochahary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-green-400 px-3 py-3 transition-colors"
                >
                  drwxr-xr-x <span className="text-blue-400">twitter</span>/
                </a>
                <a
                  href="mailto:sumitmochahary5@gmail.com"
                  className="block text-gray-400 hover:text-green-400 px-3 py-3 transition-colors"
                >
                  -rw-r--r-- <span className="text-yellow-400">email.txt</span>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <p className="text-green-400 font-mono text-sm mb-4">
                $ npm stats
              </p>
              <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                <div>
                  <p className="text-gray-500">Projects:</p>
                  <p className="text-green-400 text-2xl">50+</p>
                </div>
                <div>
                  <p className="text-gray-500">Commits:</p>
                  <p className="text-green-400 text-2xl">1.2k+</p>
                </div>
                <div>
                  <p className="text-gray-500">Coffee:</p>
                  <p className="text-green-400 text-2xl">∞</p>
                </div>
                <div>
                  <p className="text-gray-500">Lines:</p>
                  <p className="text-green-400 text-2xl">100k+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

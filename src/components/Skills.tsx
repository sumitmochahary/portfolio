const Skills = () => {
  const languages = [
    { name: "JavaScript", icon: "🟨", extension: ".js" },
    { name: "TypeScript", icon: "🔷", extension: ".ts" },
    { name: "Python", icon: "🐍", extension: ".py" },
    { name: "React", icon: "⚛️", extension: ".jsx" },
    { name: "Node.js", icon: "🟢", extension: ".js" },
    { name: "HTML/CSS", icon: "🎨", extension: ".html" },
  ];

  const tools = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Django", "FastAPI", "GraphQL"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Firebase"],
    },
    {
      category: "DevOps",
      items: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 font-mono">
            <span className="text-green-400">$</span> ls -la skills/
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Language Files */}
          <div className="bg-gray-950 rounded-lg border border-gray-800 overflow-hidden">
            <div className="bg-gray-800 px-4 py-2">
              <span className="text-gray-400 text-sm font-mono">
                ~/skills/languages
              </span>
            </div>
            <div className="p-6">
              <div className="space-y-3 font-mono text-sm">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{lang.icon}</span>
                      <span>-rw-r--r--</span>
                      <span className="text-blue-400">
                        {lang.name.toLowerCase()}
                        {lang.extension}
                      </span>
                    </div>
                    <span className="text-gray-600">2.3M</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Package.json Style */}
          <div className="bg-gray-950 rounded-lg border border-gray-800 overflow-hidden">
            <div className="bg-gray-800 px-4 py-2">
              <span className="text-gray-400 text-sm font-mono">
                package.json
              </span>
            </div>
            <div className="p-6 font-mono text-sm">
              <pre className="text-gray-300">
                {`{
  "name": "developer-portfolio",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "next": "^13.0.0",
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0",
    "node": "^18.0.0"
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((toolCategory) => (
            <div
              key={toolCategory.category}
              className="bg-gray-950 rounded-lg border border-gray-800 p-6"
            >
              <h3 className="text-green-400 font-mono text-sm mb-4">
                <span className="text-gray-400">$</span> cd{" "}
                {toolCategory.category.toLowerCase()}/
              </h3>
              <div className="space-y-2">
                {toolCategory.items.map((item) => (
                  <div
                    key={item}
                    className="text-gray-400 font-mono text-xs hover:text-green-400 transition-colors cursor-pointer"
                  >
                    <span className="text-blue-400"></span> {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Command Line Skills */}
        <div className="mt-12 bg-gray-950 rounded-lg border border-gray-800 p-6">
          <div className="font-mono text-sm">
            <p className="text-green-400 mb-4">$ ./check-skills.sh</p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-yellow-400">[✓]</span> Problem
                Solving......... <span className="text-green-400">OK</span>
              </p>
              <p className="text-gray-400">
                <span className="text-yellow-400">[✓]</span> Clean
                Code.............. <span className="text-green-400">OK</span>
              </p>
              <p className="text-gray-400">
                <span className="text-yellow-400">[✓]</span> Team
                Collaboration...... <span className="text-green-400">OK</span>
              </p>
              <p className="text-gray-400">
                <span className="text-yellow-400">[✓]</span> Continuous
                Learning..... <span className="text-green-400">OK</span>
              </p>
              <p className="text-gray-400 mt-4">
                <span className="text-green-400">All systems operational!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

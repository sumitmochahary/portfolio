const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
  ];

  const technologies = [
    'Next.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 
    'Tailwind CSS', 'Redux', 'GraphQL', 'REST APIs', 'Jest'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills with progress bars */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Core Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies grid */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technologies</h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

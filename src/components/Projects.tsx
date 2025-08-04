import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      type: 'fullstack',
      commits: 342,
      stars: 128,
    },
    {
      id: 2,
      name: 'Task Management API',
      description: 'RESTful API with authentication, real-time updates, and team collaboration features.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      github: 'https://github.com',
      live: 'https://example.com',
      type: 'backend',
      commits: 156,
      stars: 89,
    },
    {
      id: 3,
      name: 'AI Dashboard',
      description: 'Interactive dashboard for ML model monitoring and data visualization.',
      technologies: ['Vue.js', 'D3.js', 'TensorFlow.js', 'Firebase'],
      github: 'https://github.com',
      live: 'https://example.com',
      type: 'frontend',
      commits: 234,
      stars: 167,
    },
    {
      id: 4,
      name: 'DevOps Automation Tool',
      description: 'CLI tool for automating deployment pipelines and infrastructure management.',
      technologies: ['Go', 'Docker', 'Kubernetes', 'AWS'],
      github: 'https://github.com',
      type: 'tools',
      commits: 98,
      stars: 45,
    },
  ];

  const tabs = [
    { name: 'all', label: '*.all' },
    { name: 'frontend', label: '*.frontend' },
    { name: 'backend', label: '*.backend' },
    { name: 'fullstack', label: '*.fullstack' },
    { name: 'tools', label: '*.tools' },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 font-mono">
            <span className="text-green-400">$</span> git log --oneline --graph --all
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                activeTab === tab.name
                  ? 'bg-green-600 text-gray-900'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-950 rounded-lg border border-gray-800 overflow-hidden hover:border-green-600 transition-colors"
            >
              {/* Project Header */}
              <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
                <h3 className="text-green-400 font-mono font-semibold">
                  {project.name}
                </h3>
                <div className="flex items-center space-x-4 text-sm font-mono text-gray-400">
                  <span>⭐ {project.stars}</span>
                  <span>📝 {project.commits}</span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <span className="text-gray-500 font-mono text-xs">// Technologies used</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-green-400 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm flex items-center"
                  >
                    <span className="mr-1">📁</span> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 font-mono text-sm flex items-center"
                    >
                      <span className="mr-1">🌐</span> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="mt-12 bg-gray-950 rounded-lg border border-gray-800 p-6">
          <p className="text-green-400 font-mono text-sm mb-2">$ git status</p>
          <p className="text-gray-400 font-mono text-sm">
            On branch main<br />
            Your branch is up to date with 'origin/main'.<br />
            <br />
            <span className="text-green-400">nothing to commit, working tree clean</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

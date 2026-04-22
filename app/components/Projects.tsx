export default function Projects() {

  const projects = [
    { title: 'Payment Dashboard', description: 'Real-time transaction tracking and analytics.' },
    { title: 'E-commerce Platform', description: 'Full-stack e-commerce solution with payment integration.' },
    { title: 'Task Management App', description: 'Collaborative task management tool with real-time updates.' },
    { title: 'SaaS Analytics', description: 'Scalable analytics dashboard for SaaS applications.' },
  ]
  


  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-semibold mb-12">Projects</h2>

   
      <div className="grid md:grid-cols-2 gap-10">
         {projects.map((project, index) => (
          <div key={index} className="group">
             <div className="h-64 bg-gray-900 rounded-2xl mb-4 overflow-hidden">
              {/* Replace with real image */}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>   
            <p className="text-gray-400 mt-2">{project.description}</p>

          <div className="mt-3 flex gap-4 text-sm opacity-70 group-hover:opacity-100 transition">
            <a href="#">Live</a>
            <a href="#">Code</a>
          </div>
          </div>    
        ))} 
      </div>

      <button className="mt-12 bg-indigo-500 hover:bg-indigo-600 transition px-8 py-4 rounded-xl font-medium glow">
          View All Projects
      </button>
   
    </section>
  )
}
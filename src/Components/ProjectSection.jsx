import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'



const projects = [
  {
    id: 1,
    Title: "Food Delivery Landing Page",
    description: "A sleek and user-friendly web app developed using React and Tailwind CSS, allowing users to browse food items, add them to the cart, and place orders seamlessly.",
    image: "/projects/Foodie-Webpage.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://creative-gumption-89d5d6.netlify.app/",
    githubUrl: "#"
  },
  {
    id: 2,
    Title: "Employee Management system",
    description: "A simple and responsive web application built with React and Tailwind CSS to manage employee details, including adding, editing, and deleting employee records efficiently.",
    image: "/projects/EMS-system.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://guileless-alfajores-fdaafa.netlify.app/",
    gihubUrl: "#"
  }
]
const ProjectSection = () => {
  return (
    <section id='projects' className='py-17 px-4 relative'>
      <div className='container mx-auto max-w-5xl '>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h2>
        <p className='text-center text-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each projects was carefully crafted with attention of detail, performance and user experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, key) => {
            return <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-50 overflow-hidden'>
                <img src={project.image} alt={project.Title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
              </div>
              <div className='p-6 '>
                <div className="flex flex-wrap gap-2 mb-4 text-center items-center">
                  {project.tags.map((tag) => {
                    return <span className='text-foreground px-2 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border  '>{tag}</span>
                  })}
                </div>
              
              <h3 className='text-xl font-semibold mb-2'>{project.Title}</h3>
              <p className='text-foreground text-sm mb-4'>{project.description}</p>
              <div className='flex justify-between items-center '>
                <div className='flex space-x-3'>
                  <a href={project.demoUrl}  target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} 
                  target='_blank'
                  className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <Github size={20}/>
                  </a>
                </div>
              </div>
            </div>
            </div>
          })}
        </div>

        <div className='text-center mt-12'>
          <a href="https://github.com/vanshika-jain3107 " className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank'>
            Check My GitHub <ArrowRight size={16}/>
          </a>
        </div>
      </div>

    </section>
  )
}

export default ProjectSection
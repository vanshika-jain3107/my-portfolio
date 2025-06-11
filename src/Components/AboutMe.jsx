import React from 'react'
import Resume from '../assets/Vanshika_Updated_Resume.docx';
import { Briefcase, Code, User } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id='about' className='py-17 px-4 relative'>
        <div className='container mx-auto max-w-5xl '>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'>Me</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold '>Crafting Stunning UI Experiences with Passion</h3>



                    <p className='text-foreground'>
                        Hi, I'm Vanshika Jain — a frontend developer who loves bringing creativity and functionality together on the web. With a strong foundation in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I specialize in creating responsive and visually engaging websites.  
                    </p>
                    <p className='text-foreground'>
                        Currently pursuing my BCA, I’m constantly learning and exploring new technologies to expand my skill set. I’m also diving deeper into full-stack development to better understand the complete picture of web applications. 
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>Get In Touch</a>
                        <a href={Resume}
                        target='_blank'  className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>Download Resume</a>
                    </div>

                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                            <Code className='text-primary h-6 w-6'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Web Development</h4>
                                <p className='text-foreground '>Creating responsiveWeb applications with modern frameworks</p>

                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                            <User className='text-primary h-6 w-6'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                                <p className='text-foreground '>Designing intuitive user interfaces and seamless user
                    experiences.</p>

                            </div>
                            
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                            <Briefcase className='text-primary h-6 w-6'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Project Management & Team Leadership</h4>
                                <p className='text-foreground '>Led a hackathon team, applying project management and organizational skills to successfully deliver our project.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            

        </div>

    </section>
  )
}

export default AboutMe
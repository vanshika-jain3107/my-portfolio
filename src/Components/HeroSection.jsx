import { ArrowBigDown, ArrowDown } from 'lucide-react'
import React from 'react'


const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col item-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10 '>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in-delay-1'>Hi I'm </span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-2'>Vanshika </span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-3'>{" "}Jain </span>
                </h1>
                <p className='text-lg md:text-xl text-foreground mx-w-2xl mx-auto opacity-0 animate-fade-in-delay-4 '>I craft beautiful and responsive frontend designs that bring your ideas to life on the web ,turning creative ideas into sleek, functional web interfaces .</p>
                <div className='pt-4 opacity-0 animate-fade-in-delay-4 '>
                    <a href="#projects" className='cosmic-button'>
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
            <span> <a href="#about"><ArrowDown className='text-primary '/></a> </span>
        
        </div>
    </section>
  )
}

export default HeroSection
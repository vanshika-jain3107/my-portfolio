import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center '>
        <p className='text-sm text-foreground '>&copy; {new Date().getFullYear()} Vanshika.co , All rights reserved</p>
        <a href="#hero" className='p-2 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors'>
            <ArrowUp size={20}/>
        </a>
    </section>
  )
}

export default Footer
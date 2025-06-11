import React from 'react'
import { useState } from 'react'
import { cn } from '../lib/utils'


const skills = [
    {name: "HTML / CSS" , level: 95 , category: "frontend"},
    {name: "JavaScript" , level: 85 , category: "frontend"},
    {name: "Tailwind" , level: 87 , category: "frontend"},
    {name: "React" , level: 76 , category: "frontend"},
    {name: "Canva" , level: 92 , category: "tool"},
    {name: "Figma" , level: 75 , category: "tool"}
]
 const category = [
    "all" , "frontend" , "tool"
 ]

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill)=>activeCategory=="all" || skill.category == activeCategory)
  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30 '>
        <div className='container mx-auto max-w-5xl  '>
            <h2 className='text-3xl md:text-4xl font-bold '>
                My <span className='text-primary'>Skills</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-7 mt-7'>
                {category.map((cat,key)=>{
                    return <button className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                        activeCategory == cat ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )} onClick={()=>(setActiveCategory(cat))} key={key}>{cat}</button>
                })}

            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 pt-8 gap-3'>
                {filteredSkills.map((skill , key)=>{
                    return <div key = {key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                        <div className='text-left mb-4'>
                            <h3 className='font-semibold text-lg'>{skill.name}</h3>
                            
                        </div>
                        <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                            

                            <div className='bg-primary h-2 rounded-ful origin-left animate-[grow_1.5s_ese-out]' style={{
                                width: skill.level + "%"
                            }}/>

                            </div>
                            <div className='text-right mt-1'>
                                <span  className='text-sm text-foreground'>{skill.level} %</span>
                            </div>
                    </div>
                })}
            </div>
        </div>

    </section>
  )
}

export default SkillsSection
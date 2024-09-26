import React from 'react'
import { Projects } from '../../constant/constant'
import ProjectCard from './ProjectCard'
import "./Projects.css"
import { motion } from "framer-motion"
import { Sideward, Upward } from '../../Framer'
import Slider from '../Slider/Slider'



const Project = () => {
    return (
        <div id='Projects' className='section_padding section_margin'>
            <div className='about-1'>
                <motion.p {...Upward} className='content-title'>Projects</motion.p>
                <motion.p {...Sideward}>What I Have Done?</motion.p>
            </div>
            <Slider Projects={Projects} />
            {/* <motion.div
                className='project-content section_margin'>
                {Projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} src={project.src} desc={project.description} index={index} />
                ))}
            </motion.div> */}

        </div>
    )
}

export default Project

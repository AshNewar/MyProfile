import React from 'react';
import { git } from "../../assets";
import "./Projects.css"
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";


const ProjectCard = ({ title, desc, src, index }) => {
    return (
            <div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring",}}
                className='project_card'>
                <div className='project-1'>
                    <div className='project-image-container'>
                        <img src={src} alt="Project" className='project-image' />
                    </div>
                    <div className='github-image-container' >
                        <motion.img whileHover={{ scale: 1.2 }} src={git} alt='github' className='github-image' />
                    </div>
                </div>
                <div className='project-details'>
                    <div>
                        <p>{title}</p>
                        <p className='project-desc'>{desc}</p>
                    </div>

                </div>

            </div>

    )
}

export default ProjectCard

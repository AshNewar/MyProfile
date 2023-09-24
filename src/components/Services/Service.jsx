import React from 'react'
import "./Service.css"
import { Services } from '../../constant/constant'
import ServiceCard from '../ServiceCard/ServiceCard'
import { Sideward, Upward } from '../../Framer'
import { motion } from "framer-motion"
const Service = () => {
    return (
        <div id='Services' className='section_padding section_margin'>
            <div className='about-1'>
                <motion.p {...Upward} className='content-title'>Services</motion.p>
                <motion.p {...Sideward} >What I Do?</motion.p>
            </div>
            <div className='service-card section_margin'>
                {Services.map((data, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }}>
                        <ServiceCard title={data.title} icon={data.icon} index={index} />
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default Service

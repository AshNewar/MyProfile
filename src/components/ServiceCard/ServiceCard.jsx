import React from 'react'
import "./ServiceCard.css";
import { motion } from "framer-motion"


const ServiceCard = ({ title, icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: index * 0.5 }}
            className="service_card">
            <div className="service_card-content">
                <div >
                    <img src={icon} alt='service' className='service-img' />
                </div>

                <div><h2>{title}</h2></div>
            </div>
        </motion.div>
    )
}

export default ServiceCard

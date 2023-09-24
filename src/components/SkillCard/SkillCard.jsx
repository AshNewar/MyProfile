import "./SkillCard.css";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion"


const SkillCard = ({ title, Data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: index * 0.4 }}
            className="skillcard">
            <div className="skill-list">
                <div className="centered">
                    <p>{title}</p>
                </div>
                <div >
                    <ul>
                        {Data.map((data, index) => (

                            <li key={index}><FiCheckCircle />{data}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default SkillCard

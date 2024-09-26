import Card from "../Card/Card";
import "./About.css";
import { Data } from "../../constant/constant";
import { MdWorkOutline } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { PiMedal } from "react-icons/pi"
import { motion } from "framer-motion"
import { Sideward, Upward } from '../../Framer'



const About = () => {
    const AboutComment = "With hands-on experience in full-stack development, I’ve contributed to various impactful projects, including building real-time chat systems, developing scalable deployment pipelines, and optimizing platforms using cutting-edge technologies like Docker, Kubernetes, and Redis. I thrive on collaborating with teams to bring complex ideas to life. I’m currently seeking opportunities to work on innovative projects that will allow me to further develop my skills and contribute to the tech community."
    return (
        <div id="About" className="about section_padding section_margin">
            <div className="about-1">
                <motion.p {...Upward} className="content-title">About Me</motion.p>
                <motion.p {...Sideward}>Introduction</motion.p>
            </div>
            <div className="about-2">
                <div>
                    <section className="home-3 about-image-container">
                        <div>
                            <motion.div whileHover={{ scale: 1.3 }}  {...Sideward} className="about-image"></motion.div>
                        </div>
                    </section>
                </div>
                <div className="centered side-padding section2">
                    <motion.p {...Upward}>{AboutComment}</motion.p>
                    <motion.div whileHover={{ scale: 1.01 }} className="download-resume">
                        <a href="/resume.pdf" download>
                            <button className="resume-btn">
                            Download Resume
                            </button>
                        </a>
                    </motion.div>
                </div>
                
            </div>
            <div className="about-card ">

                <Card details={Data[0].details} title={Data[0].title} Icon={PiMedal} />
                <Card details={Data[1].details} title={Data[1].title} Icon={MdWorkOutline} />
                <Card details={Data[2].details} title={Data[2].title} Icon={TbSchool} />
            </div>
        </div>
    )
}

export default About

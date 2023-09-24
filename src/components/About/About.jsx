import Card from "../Card/Card";
import "./About.css";
import { Data } from "../../constant/constant";
import { MdWorkOutline } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { PiMedal } from "react-icons/pi"
import { motion } from "framer-motion"
import { Sideward, Upward } from '../../Framer'



const About = () => {
    const AboutComment = "ll talk to you tomorrow in moand us in jail for the rest of our lives either. Are you willing to take the chance? Monroe asked his partner over the phone."
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
                            <motion.div drag
                                dragConstraints={{
                                    top: -5,
                                    left: -5,
                                    right: 5,
                                    bottom: 5,
                                }} className="about-image"></motion.div>
                        </div>
                    </section>
                </div>
                <div className="centered side-padding">
                    <motion.p {...Upward}>{AboutComment}</motion.p>
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

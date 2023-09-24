import SkillCard from "../SkillCard/SkillCard";
import { Frontend, Backend, Other } from "../../constant/constant";
import "../SkillCard/SkillCard.css";
import { Sideward, Upward } from '../../Framer'
import { motion } from "framer-motion"
const Skills = () => {
    return (
        <div id="Skills" className="section_padding section_margin">
            <div className="about-1">
                <motion.p {...Upward} className="content-title">My Skills</motion.p>
                <motion.p {...Sideward}>What I Know?</motion.p>
            </div>
            <div className="skill-section section_margin">
                <SkillCard Data={Frontend} title={"Frontend Development"} index={1} className="Skill1" />
                <SkillCard Data={Backend} title={"Backend Development"} index={2} className="Skill2" />
                <SkillCard Data={Other} title={"Miscellaneous"} index={3} className="Skill3" />
            </div>




        </div>
    )
}

export default Skills


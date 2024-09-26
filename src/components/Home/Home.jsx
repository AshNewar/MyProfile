import "./Home.css";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { TbSend } from "react-icons/tb";
// import Contact from "../Contact/Contact";
import { Link } from "react-scroll";
import { motion } from "framer-motion"
import { Leftward, Sideward, Upward, textVariant, zoomIn } from "../../Framer";



const Home = () => {

    const HomeComment = "Hello! I’m Ashish Newar, a passionate and dedicated student currently pursuing my Bachelor's in Economics at IIT Kanpur. My journey in technology and software development has been fueled by a deep interest in problem-solving, innovation, and building scalable, efficient solutions."

    return (
        <div id="Home">
            <div className="home section_padding large-view">

                <section className="home-2 ">
                    <section className="home-1 div_padding">
                        <div className="home-contact">
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={1} className="home-icons"
                            onClick={() => window.open('https://github.com/AshNewar', '_blank')}
                            >
                                <BsGithub size={24} />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={2}
                             className="home-icons" onClick={() => window.open('https://github.com/AshNewar', '_blank')}>
                                <BsInstagram size={24} />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={3} className="home-icons" onClick={() => window.open('https://github.com/AshNewar', '_blank')}><BsLinkedin size={24}  /></motion.div>
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={4} className="home-icons" onClick={() => window.open('https://github.com/AshNewar', '_blank')}><SiLeetcode size={24} /></motion.div>

                        </div>
                    </section>
                    <div className="home2-content">
                        <motion.p {...textVariant} custom={.3} className="home-title">Ashish Newar</motion.p>
                        <motion.div {...textVariant} custom={.3} className="home-subtitle">
                            <div className="line-1"></div>
                            <p>Web Developer</p>
                        </motion.div>
                        <motion.p {...Upward}>{HomeComment}</motion.p>
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} {...zoomIn} custom={.5} className="home-hello">
                            <Link to={"Contact"} spy={true} smooth={true} offset={-50} duration={300}>
                                <span>Say Hello</span>
                            </Link>
                            <TbSend size={32} />
                        </motion.div>
                    </div>
                </section>
                <section className="home-3 ">
                    <div>
                        <motion.div {...Sideward} className="home-image"></motion.div>
                    </div>
                </section>

            </div>
            <div className="home section_padding small-view">
                <section className="home-3 ">
                    <section className="home-1 div_padding">
                        <div className="home-contact">

                            <motion.div whileTap={{ scale: 0.88 }} whileHover={{ scale: 1.2 }} {...Leftward} custom={1} className="home-icons"><BsGithub size={24} /></motion.div>
                            <motion.div whileTap={{ scale: 0.88 }} whileHover={{ scale: 1.2 }} {...Leftward} custom={2} className="home-icons"><BsInstagram size={24} /></motion.div>
                            <motion.div whileTap={{ scale: 0.88 }} whileHover={{ scale: 1.2 }} {...Leftward} custom={3} className="home-icons"><BsLinkedin size={24} /></motion.div>
                            <motion.div whileTap={{ scale: 0.88 }} whileHover={{ scale: 1.2 }} {...Leftward} custom={4} className="home-icons"><BsTwitter size={24} /></motion.div>

                        </div>
                    </section>
                    <div className="home-image-container">
                        <div className="home-image"></div>
                    </div>
                </section>

                <section className="home-2 ">

                    <div className="home2-content">
                        <motion.p {...textVariant} custom={.3} className="home-title">Ashish Newar</motion.p>
                        <div className="centered">

                            <div className="home-subtitle">
                                <div className="line-1"></div>
                                <p>Web Developer</p>

                            </div>
                        </div>
                        <motion.p {...Upward}>{HomeComment}</motion.p>
                        <div className="centered">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} {...zoomIn} custom={.5} className="home-hello">
                                <Link to={"Contact"} spy={true} smooth={true} offset={-50} duration={300}>
                                    <span>Say Hello</span>
                                </Link>
                                <TbSend />
                            </motion.div>

                        </div>
                    </div>
                </section>


            </div>

        </div>

    )
}

export default Home

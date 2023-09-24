import "./Home.css";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
// import Contact from "../Contact/Contact";
import { Link } from "react-scroll";
import { motion } from "framer-motion"
import { Leftward, Sideward, Upward, textVariant, zoomIn } from "../../Framer";



const Home = () => {

    const HomeComment = "I’m a web developer Always in serch of woekbheevvvvvvvcs bdhbv bhdvcgdvc ccccvcbc bchbhcw chbchcc cbbchbc chcbecb ecbe."

    return (
        <div id="Home">
            <div className="home section_padding large-view">

                <section className="home-2 ">
                    <section className="home-1 div_padding">
                        <div className="home-contact">
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={1} className="home-icons"><BsGithub size={24} /></motion.div>
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={2} className="home-icons"><BsInstagram size={24} /></motion.div>
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={3} className="home-icons"><BsLinkedin size={24} /></motion.div>
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={4} className="home-icons"><BsTwitter size={24} /></motion.div>

                        </div>
                    </section>
                    <div className="home2-content">
                        <motion.p {...textVariant} custom={.3} className="home-title">Ashish Newar</motion.p>
                        <div className="home-subtitle">
                            <div className="line-1"></div>
                            <p>Web Developer</p>
                        </div>
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
                                <TbSend size={32} />
                            </motion.div>

                        </div>
                    </div>
                </section>


            </div>

        </div>

    )
}

export default Home

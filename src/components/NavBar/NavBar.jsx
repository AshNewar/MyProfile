import { Link } from "react-scroll";
import "./NavBar.css";
import { MdDarkMode } from "react-icons/md"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavItems } from "../../constant/constant";
import { motion } from "framer-motion"
import { Spin as Hamburger } from 'hamburger-react'


const NavBar = () => {
    const [click, setClick] = useState(false);

    function clickHandler() {
        setClick(!click);
    }

    return (
        <div className="Header section_padding">
            <div className='header nav-padding'>
                <div>
                    Newar
                </div>
                <div className='links'>
                    {NavItems.map((navItem, i) => (
                        <motion.div whileHover={{ scale: 1.1 }} key={i}>
                            <Link className="link" to={navItem} spy={true} smooth={true} offset={-35} duration={300} key={i}>
                                {navItem}
                            </Link>
                        </motion.div>

                    ))}

                </div>
                <motion.div initial={false}
                    animate={click ? "open" : "closed"}
                    className="menuBar">
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <Hamburger size={24} toggled={click} toggle={clickHandler} />

                    </motion.div>
                    {click && (
                        <motion.ul
                            className="menuList" >
                            {NavItems.map((navItem, i) => (
                                <motion.div whileHover={{ scale: 1.1 }} key={i}>
                                    <Link className="link" to={navItem} spy={true} smooth={true} offset={-50} duration={300} >
                                        {navItem}
                                    </Link>
                                </motion.div>
                            ))}

                        </motion.ul>
                    )}
                </motion.div>
            </div>
        </div >
    );
};

export default NavBar;
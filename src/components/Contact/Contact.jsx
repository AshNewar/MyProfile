import React, { useRef, useState } from 'react'
import "./Contact.css";
import Lottie from 'lottie-react';
import { SocialMedia } from '../../assets';
import { motion } from "framer-motion"
import { Leftward, Sideward, Upward } from '../../Framer';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

//service Id =service_rwt8hw3
//templateId =template_z115yci
//oWwXP9h9HqpApEv8O

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            import.meta.env.VITE_EMAIL_JS_SERVICE,
            import.meta.env.VITE_EMAIL_JS_TEMPLATE,
            {
                from_name: form.name,
                to_name: "Ashish Newar",
                from_email: form.email,
                to_email: "jnvspr12345@gmail.com",
                message: form.message,
            },
            import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY)
            .then(() => {
                setLoading(false);
                setForm({
                    name: "",
                    email: "",
                    message: ""
                })
                toast.success("Message sent Successfully")
            }, (error) => {
                setLoading(false);
                console.log(error);
                toast.error("Opps! Something went wrong");
            });

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });


    }
    return (
        <div id="Contact" className='section_padding section_margin'>
            <div className="about-1">
                <motion.p {...Upward} className="content-title">Contact</motion.p>
                <motion.p {...Sideward} >Wanna Contact Me?</motion.p>
            </div>
            <div className='contact section_margin'>
                <motion.div {...Leftward} className='contact-1'>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className='contact-item'>
                            <label>Name</label>
                            <input
                                type="text"
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's Ur Name?" />
                        </div>
                        <div className='contact-item'>
                            <label>Email</label>
                            <input
                                type="email"
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's Ur Email?" />
                        </div>
                        <div className='contact-item'>
                            <label>Message</label>
                            <textarea
                                rows="5" cols="35"
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What's Ur Message" />
                        </div>
                        <motion.button disabled={loading} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1, color: "#f5f3f0", backgroundColor: "#bdbab7" }} type="submit" className="contact-btn">Send</motion.button>

                    </form>

                </motion.div>
                <div className='contact-2'>
                    <Lottie animationData={SocialMedia} className='contact-animation' />

                </div>
            </div>

        </div>
    )
}

export default Contact

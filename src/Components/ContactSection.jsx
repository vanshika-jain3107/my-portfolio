import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useRef } from 'react';
import { cn } from '../lib/utils';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pbazpxp', 'template_evs54b8', form.current, 'N4mHAc9INKMpIAgeZ')
            .then((result) => {
                toast.success("Message Sent Successfully!");
                form.current.reset();
            }, (error) => {
                toast.error("Something went wrong. Please try again.");
                console.log(error.text);
            });
    };

    return (
        <section id='contact' className='py-17 px-4 bg-secondary/30 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>
                <p className='text-center text-foreground mb-12 max-w-2xl mx-auto'>
                    Got a project idea, need a website for your business, or looking to collaborate? Let’s connect and create something amazing!
                </p>
                <div className='grid gricol-1 md:grid-cols-2 gap-12'>
                    <div className="space-y-8">
                        <h3 className='text-2xl font-semibold mb-6'>
                            Contact Information
                        </h3>
                        <div className='space-y-6 justify-center'>
                            <div className="flex items-start space-x-4">
                                <div className='p-3 rounded-full bg-primary/10'><Mail className='h-6 w-6 text-primary' /></div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:jainvanshika402@gmail.com" className='text-foreground hover:text-primary transition-colors'>jainvanshika402@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className='p-3 rounded-full bg-primary/10'><Phone className='h-6 w-6 text-primary' /></div>
                                <div>
                                    <h4 className='font-medium'>Mobile No.</h4>
                                    <a href="tel:+918949152570" className='text-foreground hover:text-primary transition-colors'>+91 8949152570</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className='p-3 rounded-full bg-primary/10'><MapPin className='h-6 w-6 text-primary' /></div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <span className='text-foreground'>Pratap Nagar, Jaipur</span>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href="https://www.linkedin.com/in/vanshika-jain-96ab8b297" target='_blank' rel='noreferrer'>
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/vanshika..jain._?igsh=MW40MTdhd25seXBuMA==" target='_blank' rel='noreferrer'>
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form className='space-y-6' ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                <input type="text" id='name' name='user_name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='e.g. Vanshika...' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                                <input type="email" id='email' name='user_email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='e.g. john@gmail.com...' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                                <textarea id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none ' placeholder='e.g. Hello I like to talk about...' />
                            </div>
                            <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>Send Message<Send size={16} className='m-1' /></button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName={() =>
                    "relative flex p-6 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer  bg-card text-white shadow-lg"
                }
            />
        </section>
    );
};

export default ContactSection;

import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import emailjs from '@emailjs/browser';
import $ from 'jquery';
import Typed from 'typed.js';
import Bhuwan from './img/bhuwan.png';
import logo from './img/logo.png';
import CV from './file/CV.pdf';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css'

function App() {
    const el = useRef(null);
    const ell = useRef(null);
    const form = useRef();

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Freelancer"],
            startDelay: 0,
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 10,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        const typed = new Typed(ell.current, {
            strings: ["Web Developer", "Freelancer"],
            startDelay: 0,
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 10,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i64d1lp', 'template_ew7azan', form.current, 'aE7ONuzx8Azj2rlFb')
            .then((result) => {
                $('.notification').html('<span style="color:white; background: rgb(19, 100, 3, 0.5); padding: 10px 10px; border-radius: 5px; display:flex;">Email is successfully sent.</span>');
                window.location.reload();
            }, (error) => {
                $('.notification').html('<span style="color:red; background: rgb(19, 100, 3, 0.5); padding: 15px 15px; border-radius: 5px; display:flex;>Something went wrong.</span>');
                window.location.reload();
            });
    };

    return (
        <div>
            <div className="scroll-up-btn">
                <i className="fas fa-angle-up"></i>
            </div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href="Javascript:void(0);">

                            <img src={logo} alt="LOGO" style={{ height: '40px' }} />
                        </a>
                    </div>
                    <ul className="menu">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#about" className="menu-btn">About</a></li>
                        <li><a href="#services" className="menu-btn">Services</a></li>
                        <li><a href="#skills" className="menu-btn">Skills</a></li>
                        <li><a href="#projects" className="menu-btn">My Projects</a></li>
                        <li><a href="#contact" className="menu-btn">Contact</a></li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>

            {/* home section start */}
            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-3">I'm <span>Bhuwan Pariyar</span> </div>
                        <div className="text-1">And I'm a <span className="typing" ref={el}></span></div>
                        <a href='#contact'>Hire me</a>
                    </div>
                </div>
            </section>

            {/* about section start */}
            <section className="about row" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={Bhuwan} alt="Bhuwan Pariyar" style={{ objectFit: 'contain' }} />
                        </div>
                        <div className="column right">
                            <div className="text">I'm Bhuwan and I'm a <span className="typing-2" ref={ell}></span></div>
                            <p>
                                Highly motivated Laravel developer with almost 1.5 years of experience seeking a challenging position to contribute my skills and knowledge to develop robust web applications.
                                Committed to delivering high-quality code and continuously improving my skills to stay up-to-date with the latest technologies.
                            </p>
                            <a href={CV} target='_blank'><i className="fas fa-file-pdf" style={{ fontSize: '18px' }}></i>&nbsp;Open CV</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* services section start */}
            <section className="services" id="services">
                <div className="max-width">
                    <h2 className="title">My services</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-object-group"></i>
                                <div className="text">Web Design</div>
                                <p>
                                    The medium of website emerged as effective and most efficient tools of communication. The image of website solely depends upon the layout, structure and compilation of company's content.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code"></i>
                                <div className="text">Web Development</div>
                                <p>
                                    Every website should be built with two primary goals. Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-database"></i>
                                <div className="text">Database</div>
                                <p>
                                    The scope of Database management system is not hidden from any organization. Everyone knows that how important database management system is if they want to manage their precious data securely.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* skills section start */}
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">My creative skills & experiences.</div>
                            <p>
                                Collaborated with the development team to design, develop, and maintain web applications using the Laravel framework .
                                Implemented new features and enhancements based on project requirements and specifications.
                                Conducted thorough testing and debugging to ensure the functionality, performance, and security of the applications.
                                Worked with databases, performed query optimization, and ensured data integrity.
                                Integrated third-party APIs and services to enhance application functionality.
                                Collaborated with the front-end team to implement responsive and user-friendly interfaces.
                                Participated in code reviews to ensure code quality and adherence to coding standards.
                                Researched and implemented best practices and new technologies to improve development processes.
                            </p>
                            <a href="#contact">Hire me</a>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>60%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>JavaScript / jQuery</span>
                                    <span>60%</span>
                                </div>
                                <div className="line js"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>PHP / Laravel</span>
                                    <span>70%</span>
                                </div>
                                <div className="line php"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MySQL</span>
                                    <span>80%</span>
                                </div>
                                <div className="line mysql"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* projects section start */}
            <section className="projects" id="projects">
                <div className="max-width">
                    <h2 className="title">My Projects</h2>
                    {/* <div className="carousel owl-carousel"> */}
                    <OwlCarousel items={3}
                        className="owl-theme"
                        loop
                        nav
                        margin={7} >
                        <div className="hover_effect">
                            <a href="https://dharmacloud.store/" target="_blank">
                                <div className="box">
                                    <div className="text">Dharmacloud Store</div>
                                    <p>
                                        An e-commerce site selling ritual products aims to serve as a comprehensive platform for individuals seeking spiritual and ritualistic items, offering a convenient and informative shopping experience while fostering a sense of community and support for their practices.
                                    </p>
                                </div>
                                <i className="fas fa-search fa-4x "></i>
                            </a>
                        </div>
                        <div className="hover_effect">
                            <a href="https://github.com/bhuwanepali" target="_blank">
                                <div className="box">
                                    <div className="text">Tour and Travel Management System</div>
                                    <p>
                                        Booking of different travel and tourism sites, hotels, and transportation.
                                        used language:- HTML, CSS, JS, MySQL, and PHP.
                                    </p>
                                </div>
                                <i className="fas fa-search fa-4x "></i>
                            </a>
                        </div>
                        <div className="hover_effect">
                            <a href="https://github.com/bhuwanepali/online-shopping-system" target="_blank">
                                <div className="box">
                                    <div className="text">Online Shopping System in Html,Css,Javascript, and Php</div>
                                    <p>
                                        Buying different kinds of Products regarding clothes and fashion, Home
                                        appliances, and technical products.used language:- HTML, CSS, JS, MySQL,
                                        and PHP.
                                    </p>
                                </div>
                                <i className="fas fa-search fa-4x "></i>
                            </a>
                        </div>
                        <div className="hover_effect">
                            <a href="https://github.com/bhuwanepali/Notice-Board-Management-System" target="_blank">
                                <div className="box">
                                    <div className="text">Notice Management system using C++</div>
                                    <p>
                                        Students can view many types of notices related to Exam routines, Events,
                                        Results, Academic Programs, and many more. Used Language:- C++.
                                    </p>
                                </div>
                                <i className="fas fa-search fa-4x "></i>
                            </a>
                        </div>
                    </OwlCarousel>
                    {/* </div> */}
                </div>
            </section>

            {/* contact section start*/}
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p>
                                Ready to start your web development project or have questions about our services? I'm here to help. Get in touch with me today.
                            </p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Bhuwan Pariyar</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">Sarlahi, Nepal</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title"><a href="mailto:bhuwanpariyarr@gmail.com" style={{ textDecoration: 'none' }}>bhuwanpariyarr@gmail.com</a></div>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <span>
                                        <a href="https://www.linkedin.com/in/bhuwan-nepali-18613018b/" target="_blank"><i className="fab fa-linkedin" style={{ color: '#0a66c2' }}></i></a>
                                        <a href="https://www.facebook.com/bhuwan.nepali.739" target="_blank"><i className="fab fa-facebook" style={{ color: '#4267B2' }}></i></a>
                                        <a href="https://github.com/bhuwanepali" target="_blank"><i className="fab fa-github" style={{ color: '#6e5494' }}></i></a>
                                        <a href="https://www.instagram.com/nepali_bhuwan/" target="_blank"><i className="fab fa-instagram" style={{ color: '#C13584' }}></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='notification' style={{ marginBottom: '15px' }}></div>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Name" name="user_name" required className="form-control" />
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Email" name="user_email" required className="form-control" />
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Subject" name="subject" required className="form-control" />
                                </div>
                                <div className="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." name="message" required className="form-control"></textarea>
                                </div>
                                <div className="button-area">
                                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >

            {/* footer section start */}
            < footer >
                <span> <span className="far fa-copyright"></span> 2023 Created </span>
            </footer >
        </div >
    );
}

ReactDom.render(<App />, document.getElementById('root'));

$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').on('click', function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').on('click', function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').on('click', function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
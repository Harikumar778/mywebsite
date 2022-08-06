import React from 'react'
import '../app.css'
function Hero() {
  return (
    <section className='bg-dark text-light p-3 text-center'>
        <div className="container hero_section">
            <div className='d-md-flex align-items-center justify-content-between'>
                <div className='hero-content'>
                <h1 className="mr-5">HI I AM <span class="text-warning">HARIKUMAR</span></h1>
                <div className="i-title">
                    <div className="title_wrapper">
                        <div className="item1">WEB DEVELOPER</div>
                        <div className="item1">PYTHONIST</div>
                        <div className="item1">PROGRAMMER</div>
                        <div className="item1">DESIGNER</div>
                        <div className="item1">PROGRAMMER</div>
                    </div>
                </div>
                <p className="lead mt-2">Hi, I'm a JavaScript Developer, Competitive Programmer, and a MERN STACK DEVELOPER who is highly passionate about building fast, creative applications and writing beautiful code.</p>
                <div className="p-2">
                    <button className="btn-primary rounded hireme_btn p-1 m-1 text-dark">
                        <a className="nav-link text-dark " href="#contact-form">Hire me</a>
                        </button>
                    <button className="btn-primary rounded hireme_btn p-1 m-1 text-dark ">
                        <a className="nav-link text-dark " href="#">Download CV</a>
                        </button>
                </div>
                </div>
            <img className='img-fluid w-50' src="https://macchina.io/images/gateway-developer.png" alt="main_logo" draggable='false' />
            </div>
        </div>

    </section>
  )
}

export default Hero
import React from 'react'
import './services.css'
import {BiCheck}from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>My Skills</h5>
      <h2>What I have used</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Development Tools</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>IDE - Atom, Visual Studio Code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CMS - Wordpress</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Elementor</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Chrome WebDev Tools</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wordpress Plugins</p>
            </li>
           
            
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Languages I have used</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Javascript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React</p>
            </li>
            
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Back End / Server Side</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Github Version Control</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrated API's</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Node.JS</p>
            </li>
            
            
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services
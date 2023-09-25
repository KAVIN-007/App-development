import React from 'react';
import './About.css';
// import Header from './Components/Header/Header'


function About() {
  const founders = [
    {
      name: 'Prabhakaran',
      role: ' CEO',
      bio: 'Prabhakaran is the visionary founder and CEO of SIMS. With a strong background in technology and a passion for education, he founded SIMS to simplify student information management for educational institutions.',
      
    },
    {
      name: 'Kavin M',
      role: 'Co-Founder & CTO',
      bio: 'kavin is a visionary technologist who brings extensive expertise in software development. He is dedicated to pushing the boundaries of technology to create user-friendly and innovative products.',
       
    },
    {
      name: 'Manglesh',
      role: 'Founder',
      bio: 'Manglesh is the visionary founder of our organization. With a passion for innovation and a keen entrepreneurial spirit, he established our company to address pressing challenges in various industries.',
     
    },
  ];

  return (
    <section className="about-sectiona">
      <div className="containera">
        <h2><b><i>FEW THINGS ABOUT USS</i></b></h2>
        <div className="rowwa">
          
          {founders.map((founder, index) => (
            <div key={index} className="col-lg-4a">
              <div className="founder-carda">
                <img src={founder.image} alt={founder.name} className="founder-imagea" />
                <h3>{founder.name}</h3>
                <p className="founder-rolea">{founder.role}</p>
                <p className="founder-bioa">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div>

 
    
      <main>
        <section className="about-sectionna">
          <h2>ABOUT US</h2>
          <p>
          Welcome to [Your Tax Calculator Website Name], your trusted partner in simplifying the complex world of taxation. We understand that taxes can be a daunting subject for many individuals and businesses. 
          Our mission is to empower you with the tools and knowledge you need to navigate the intricate maze of tax regulations and make informed financial decisions

          </p>
        </section>
        <section className="mission-visiona">
          <div className='mission-vissiona'>
          <h2>Our MISSION</h2>
          <p>
          At [Your Tax Calculator Website Name], our mission is to empower individuals and businesses with the knowledge and tools they need to take control of their financial futures through accurate and accessible tax solutions.
          </p>
          </div>
          <div className='mission-vissiona'>

          <h2>OUR VISION</h2>
          <p>
          We envision a world where people from all walks of life have the confidence to manage their finances effectively, knowing that they have access to the tools and resources they need.
          </p>
          </div>
        </section>
        <section className="core-valuesa">
          <h2>CORE VALUES</h2>
          <ul>
            <li>
              <strong><i>Accuracy :</i></strong> We are dedicated to providing accurate and precise tax calculations and information. We continuously update our platform to reflect the latest tax laws and regulations.
            </li>
            <li>
              <strong><i>Accessibility:</i></strong> We believe that financial empowerment should be accessible to everyone, regardless of their background or experience.
            </li>
            
            <li>
              <strong><i> Trust:</i></strong> We implement robust security measures to protect user information.
We are committed to maintaining the highest ethical standards in all aspects of our operations.
            </li>
            <li>
              <strong><i> Education :</i></strong>We provide informative content to empower users with knowledge about taxes, financial planning, and more.
            </li>
          </ul>
        </section>
        
      </main>
      
    </div>


        </div>
            
    </section>
  );
}

export default About;
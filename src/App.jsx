function App() {
  return (
    <div className="App">
      <div className="demo-banner">
         <p><strong>DEMO ONLY!</strong> THIS WEBSITE IS CURRENTLY FOR DEMONSTRATION PURPOSES ONLY.</p>
      </div>
      <div className="container">
        <nav>
          <div className="logo">
             <img src="/logo.png" alt="Intense Gym Centre" />
          </div>
          <div className="nav-links">
             <a href="#facilities">Facilities</a>
             <a href="#classes">Classes</a>
             <a href="#benefits">Benefits</a>
             <a href="#contact">Contact</a>
             <a href="#contact" className="btn">Join Now</a>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-left">
            <h1>Achieving your fitness goals by rewarding intense dedication.</h1>
            <p>We provide world-class equipment and elite training to help you push your limits and transform your body.</p>
          </div>
          <div className="hero-right">
             <div className="hero-graphic">
               <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" alt="Intense Gym Facility" />
             </div>
          </div>
        </section>

        <section className="features-section" id="facilities" style={{padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
          <h2 style={{fontSize: '3.5rem', marginBottom: '3rem'}}>Facilities</h2>
          <div className="features-grid" style={{padding: 0, borderBottom: 'none'}}>
            <div className="feature-card">
              <div className="feature-img">
                <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600" alt="Weight Program" />
              </div>
              <h3>Weight Program</h3>
              <p>State-of-the-art strength training and free weight zones designed for serious lifting.</p>
            </div>
            <div className="feature-card">
              <div className="feature-img">
               <img src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800" alt="MMA & Boxing" />
              </div>
              <h3>Boxing or MMA</h3>
              <p>Professional grade rings, heavy bags, and matted areas for combat sports and martial arts training.</p>
            </div>
            <div className="feature-card">
              <div className="feature-img">
                <img src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=600" alt="Basketball Court" />
              </div>
              <h3>Basketball</h3>
              <p>Full-size regulation indoor courts available for pick-up games, drills, and team conditioning.</p>
            </div>
            <div className="feature-card">
              <div className="feature-img">
                <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=600" alt="Dance Studio" />
              </div>
              <h3>Dance Studio</h3>
              <p>Spacious, well-lit spaces with mirrored walls for group dance, choreography, and stretching.</p>
            </div>
          </div>
        </section>

        <section className="service-section" id="classes">
          <div className="service-flex">
            <div className="service-content">
              <h2>Zumba</h2>
              <p>Get your heart pumping with our high-energy Zumba classes. Dance to the rhythm and burn calories in an exciting group setting designed for all fitness levels.</p>
              <button>View Schedule</button>
            </div>
            <div className="service-image">
               <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800" alt="Zumba Class" />
            </div>
          </div>
        </section>

        <section className="service-section" style={{backgroundColor: '#232122', color: '#fff', margin: '0 -2rem', padding: '6rem 2rem'}}>
          <div className="container" style={{padding: 0}}>
             <div className="service-flex" style={{flexDirection: 'row-reverse'}}>
                <div className="service-content">
                   <h2>Cross Training</h2>
                   <p>Our functional fitness approach ensures you build strength, agility, and endurance. Tackle intense physical challenges and push your limits with our Cross Training programs.</p>
                   <button style={{backgroundColor: '#fff', color: '#232122'}}>Join Now</button>
                </div>
                <div className="service-image">
                   <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" alt="Cross Training" />
                </div>
             </div>
          </div>
        </section>

        <section className="service-section">
          <div className="service-flex">
            <div className="service-content">
              <h2>MMA & Boxing</h2>
              <p>Learn striking and grappling from professional fighters. We offer high-intensity classes for all skill levels, from beginners looking for a workout to competitive athletes.</p>
              <button>Find a Coach</button>
            </div>
            <div className="service-image">
               <img src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800" alt="MMA & Boxing" />
            </div>
          </div>
        </section>

        <section className="benefits" id="benefits">
          <h2>Member Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Rewards for consistency</h3>
              <p>Earn points for every workout logged and class attended. Redeem them for advanced coaching or merchandise.</p>
              <a href="#" style={{fontSize: '0.875rem', fontWeight: 600}}>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
            <div className="benefit-card">
              <h3>State-of-the-art equipment</h3>
              <p>We provide premium free weights, advanced machines, and specialized functional training zones.</p>
              <a href="#" style={{fontSize: '0.875rem', fontWeight: 600}}>Explore equipment <span aria-hidden="true">&rarr;</span></a>
            </div>
            <div className="benefit-card">
              <h3>Community support</h3>
              <p>Surround yourself with like-minded individuals who push each other to reach new heights.</p>
              <a href="#" style={{fontSize: '0.875rem', fontWeight: 600}}>Meet the community <span aria-hidden="true">&rarr;</span></a>
            </div>
            <div className="benefit-card">
              <h3>Recovery facilities</h3>
              <p>Access our saunas, cold plunges, and sports massage therapy to heal faster and train harder.</p>
              <a href="#" style={{fontSize: '0.875rem', fontWeight: 600}}>Explore facilities <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <h2>“Built on discipline and experience, our coaching is designed to develop strength, consistency, and confidence-inside and outside the gym.”</h2>
          <div className="quote-author">
             Gerald Santos<br/>
             Intense Gym Centre
          </div>
        </section>

        <section className="contact-info-section" id="contact">
          <div className="contact-grid">
             <div className="contact-details">
                <h2>Visit Us</h2>
                <div className="info-block">
                   <h3>Location</h3>
                   <p>Q25H+F9J, <br/>Congressional Rd Ext, Extension,<br/> Caloocan, Metro Manila</p>
                </div>
                <div className="info-block">
                   <h3>Open Hours</h3>
                   <p>Every day<br/>7:00 AM - 10:00 PM</p>
                </div>
                <div className="info-block">
                   <h3>Contact Info</h3>
                   <p>(555) 123-4567<br/>info@intensegym.com</p>
                </div>
                <div className="info-block social-links">
                   <h3>Follow Us</h3>
                   <a href="#" aria-label="Instagram">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                   </a>
                   <a href="#" aria-label="Facebook">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                   </a>
                   <a href="#" aria-label="Twitter">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                   </a>
                </div>
             </div>
             <div className="location-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15433.40002736279!2d121.01434728715822!3d14.749300399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1863bcf52cd%3A0x6df5becbca750c56!2sIntense%20Gym%20Centre%20North%20Caloocan!5e0!3m2!1sen!2sph!4v1772594332570!5m2!1sen!2sph" width="100%" height="100%" style={{border: 0, minHeight: '320px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
             </div>
          </div>
        </section>

        <footer>
          <div className="footer-bottom">
            <div className="footer-logo">
                <img src="/logo.png" alt="Intense Gym Centre" />
            </div>
            
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li>Personal Training</li>
                <li>Group Classes</li>
                <li>Nutrition Plans</li>
                <li>Recovery</li>
                <li>API</li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Follow us</h4>
              <ul>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

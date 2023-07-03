import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        We are a leading provider of IT services, specializing in project development, maintenance, online training, and support.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h3>Project Development</h3>
          <p>
            Our experienced team delivers high-quality software development solutions tailored to your unique business needs. We use the latest technologies and best practices to ensure efficient and scalable projects.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Maintenance</h3>
          <p>
            We offer comprehensive maintenance services to keep your software and systems up to date. Our proactive approach ensures smooth operations, bug fixes, and continuous improvements to optimize performance and security.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Online Training</h3>
          <p>
            Our online training programs are designed to enhance your skills and knowledge in various IT domains. We provide interactive and comprehensive training materials, hands-on exercises, and expert guidance to help you stay ahead in the rapidly evolving tech industry.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Support</h3>
          <p>
            Our dedicated support team is available to assist you with any technical issues or concerns. We offer timely and reliable support services to ensure the smooth operation of your systems and help you overcome any obstacles you may encounter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

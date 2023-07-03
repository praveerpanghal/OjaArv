import React from 'react';

const Services = () => {
  return (
    <div className="container">
      <h1>Our IT Services</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                We offer custom web development services to create responsive and scalable web applications using the latest technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mobile App Development</h5>
              <p className="card-text">
                Our expert team develops mobile apps for iOS and Android platforms that are user-friendly, efficient, and tailored to your specific requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">IT Consulting</h5>
              <p className="card-text">
                We provide IT consulting services to help businesses make informed technology decisions, optimize processes, and achieve their goals.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cybersecurity</h5>
              <p className="card-text">
                Our cybersecurity experts offer comprehensive solutions to protect your systems and data from cyber threats, ensuring business continuity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

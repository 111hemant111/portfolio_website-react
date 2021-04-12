import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    // var resumeDownload = "resources/" + data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Hemant's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span><a href="tel: +1 (343) 333-9116">{phone}</a></span>
                <br />
                <span><a target="_blank" rel="noreferrer" href="mailto: 111hemant111@gmail.com">{email}</a></span>
              </p>
            </div>
            {/* <div className="columns download">
              <p>
                <a target="_blank" href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>My Resume
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

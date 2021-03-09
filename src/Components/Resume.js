import React from "react";

var freelance = () => {
  return (
    <div>
      <h3>Remote Freelance Web Developer</h3>
      <p className="desig"> Freelance Developer <span>&bull;</span> <em className="date">Apr 2019 - Jul 2020</em></p>
      <div>
        <p className="info">Currently working on a React-based Web Application called “Word Of Advice” for Health/Workout Assistance for a client - Based on MERN stack<br/>
          Built websites for clients using Wordpress.org CMS, Javascript, jQuery, Bootstrap, MySQL DB and PHP Back-end. Client Wordpress.org websites built:
        </p>
        <p className="info">
          1. <a target="_blank" href="https://nacptpharmacollege.com">NACPT Pharma College</a><br/>
          2. <a target="_blank" href="https://thelightinglamp.com">The Lighting Lamp</a><br/>
          3. <a target="_blank" href="https://50hands.org">50Hands</a> and more.
        </p>
      </div>
    </div>
  );
}

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree}<span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {

      var workdesc = work.description.map(function (descitem) {
        return (
          <div key={descitem.id}>
            <p className="sub_li">{descitem.id} {descitem.projname}</p>
            <p className="info"><em className="date">{descitem.exp}</em>
            </p>
          </div>
        );
      });

      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="desig"> {work.title} <span>&bull;</span> <em className="date">{work.years}</em></p>
          <div>{workdesc}</div>
        </div>
      );
    });
    // function set(){
    //   return (
    //     <div>
    //       <h3>Remote</h3>
    //       <p className="desig"> Freelance Developer <span>&bull;</span> <em className="date">Apr 2019 - Jul 2020</em></p>
    //       <div>
    //         <p>Currently developing a React-based Web Application called “Word Of Advice” for Health/Workout Assistance for a client - Based on MERN stack</p>
    //         <p>Built websites for clients using Wordpress.org CMS, Javascript, jQuery, Bootstrap, MySQL DB and PHP Back-end. Client Wordpress.org websites built:</p>
    //         <p>1. <a target="_blank" href="https://nacptpharmacollege.com">NACPT Pharma Colleg</a></p>
    //         <p>2. <a target="_blank" href="https://thelightinglamp.com">The Lighting Lamp</a></p>
    //         <p>3. <a target="_blank" href="https://50hands.org">50Hands</a>and more.</p>
    //       </div>
    //     </div>
    //   );
    // };
    // var freelance_work = set();
    
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    var skillsnew = data.skills.map(function (skills) {
      return (
        <button className="skillbuttons" key={skills.name}>{skills.name}</button>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="two columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="ten columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="two columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="ten columns main-col">{work}{freelance()}</div>
      </div>
    </section>
  );
};

export default Resume;

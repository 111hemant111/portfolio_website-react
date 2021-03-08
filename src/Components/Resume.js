import React from "react";

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

        <div className="ten columns main-col">{work}</div>
      </div>
    </section>
  );
};

export default Resume;

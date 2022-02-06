import React from "react";
import "./Me.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faCalendar, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';





const Me = ( props ) => {
  const me = props.me || []
  return (
    <div className="me">
      <img src={me.image} alt="" />
      <div className="card">
      <h2>
        {me.name} <br />
        </h2>
        <p><FontAwesomeIcon icon={faMapMarkedAlt} /> {me.adress} , {me.city} </p>
        <p><FontAwesomeIcon icon={faCalendar} /> {me.birthDate}</p>
        <p>
        <FontAwesomeIcon icon={faEnvelope} />
          <a href={"mailto:" + me.email}>
          lp.delriom@gmail.com
          </a>
        </p>
        <p><FontAwesomeIcon icon={faMobile} /> {me.phone}</p>
        <p> <FontAwesomeIcon icon={faGitlab} /><a href={me.GitLab}>
            GitLab
          </a></p>
        <p>  {me.aboutMe}</p>
      </div>
    </div>
  );
};

export default Me;
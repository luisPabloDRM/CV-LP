import React from "react";
import "./Me.scss";

const Me = ( props ) => {
  const me = props.me || []
  return (
    <div className="me">
      <img src={me.image} alt="" />
      <div className="card">
      <h2>
        {me.name} <br />
        </h2>
        <p>🗺️  {me.adress} , {me.city} </p>
        <p>🗓️  {me.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + me.email}>
          lp.delriom@gmail.com
          </a>
        </p>
        <p>📱 {me.phone}</p>
        <p>💾    <a href={me.GitLab}>
            GitLab
          </a></p>
        <p>  {me.aboutMe}</p>
      </div>
    </div>
  );
};

export default Me;
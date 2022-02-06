import React from "react";

const About = (props) => {
  const mySelf = props.me || [];
  console.log(mySelf);
  return (
    <div>
      {mySelf.map((item) => {
        <div>
          <p>{item}</p> 
         
        
        </div>;
      })}
    </div>
  );
};

export default About;

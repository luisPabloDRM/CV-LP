import React from "react";



const Education = ( props ) => {
  const education = props.education || []
  return (
    //<div  className ="education" > <h1>EDUCACION</h1>
       <div className="education card">
        {education.map((item) => {
          return (
            <div className='inABox' key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div> 
   // </div>
  );
};

export default Education;
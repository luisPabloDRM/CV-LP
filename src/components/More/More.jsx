import React from 'react';

const More = (props) => {
  const languages = props.languages || []
  const habilities = props.habilities || []
  const volunteer = props.volunteer || []
  return (

       <div className="experience card">
  {languages.map((item) => {
          return (
            <div  className="inABox" key={JSON.stringify(item)}>
              <p className="name">🏴󠁧󠁢󠁥󠁮󠁧󠁿{item.language}</p>
              <p>{item.wrlevel}</p>
              <p>{item.splevel}</p>
            </div>
          );
        })}
  
  <div className="inABox"> 
  <h2>Skills</h2>
    {habilities.map((item) => {
          return (
            
            <div   key={JSON.stringify(item)}>
              <p className="name"> -{item}</p>

            </div>
          );
        })}
  </div>
  

  {volunteer.map((item) => {
          return (
            <div  className="inABox" key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div> 
  )};

export default More;

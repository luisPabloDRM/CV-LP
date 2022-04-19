import React from 'react'

const PortFolio = (props) => {
    const portFolio = props.portFolio || []
  return (
    <div>
        {portFolio.map((item)=> {
            return (
                <div >
                     <div className='card'key={JSON.stringify(item)} >
                    <div className='imgPort' >
                       <img src={item.image} alt="Img" /> 
                    </div>
                    <p className='name' > {item.tech}</p>
                    <p className='name' > {item.description}</p>
                </div>
                </div>
               
            )
        })}
    </div>
  )
}

export default PortFolio
import React, { useState } from 'react';

const Services = () => {
  const [isSelect, setIsSelect] = useState(false);

  function handleSelectChange(e) {
    // Check if the selected value is "PES"
    if (e.target.value === 'PES') {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  }

  return (
    <>
      <div style={{ width: '100%',height: '40%', display: 'flex', flexDirection: 'column' , justifycontent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'lightgray', border: '2px solid black'}}>
        <select id="Services" onChange={handleSelectChange}>
            <option value="Select" >--Select--</option>
            <option value="PES">PES</option>            
          </select>
      </div>
      <div style={{ width: '100%',height: '100%', marginTop: '5px'}}>
        {isSelect ? (              
          <div>
            <iframe title='TPH' style={{ width: '100%',height: '100%'}}
              src='https://app.powerbi.com/links/kqzAEIZqYI?ctid=b6a45e6a-409e-4c04-be22-3ad749b6c7bb&pbi_source=linkShare' 
              frameboder="0" allowFullScreen="true" >
            </iframe>
          </div>
          ) : ( <div> </div>
        )}
      </div>
    </>
  )
}

export default Services

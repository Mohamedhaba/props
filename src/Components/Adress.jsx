import React from 'react'

const Adress = ({city,rue,zipCode}) => {
    // console.log(zipCode)
  return (
    <div>
        {/* <h5>{darna.city}</h5>
        <h5>{darna.rue}</h5>
        <h5>{darna.zipCode}</h5> */}
        <h4>{city}</h4>
        <h4>{rue}</h4>
        <h4>{zipCode}</h4>



    </div>
  )
}

export default Adress
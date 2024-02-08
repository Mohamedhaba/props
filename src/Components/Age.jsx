import React from 'react'

const Age = (props) => {
  // console.log(props)
  return (
    <div>
      <h4>{props.omar}</h4>
      <p className='chil' >{props.children}</p>
    </div>
  )
}

export default Age
import React from 'react'

const Userinfo = (props) => {
  return (
    <div>
       
        <h2 className='mama'>Name: {props.firstname} {props.lastname} <br />
            Email: {props.emailaddress} <br />
            Phone Number: {props.phonenumber}</h2> <br /> 

    </div>
  )
}

export default Userinfo;
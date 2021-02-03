import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {FaHome,FaUser,FaPhone,FaUniversity} from 'react-icons/fa'

import {GiAges,FcDepartment} from 'react-icons/all'

const CardComponent = () => {
  return (
    <>
      <Card style={{maxWidth:"450px"}} className="d-flex">
        <Card.Body>
          <Card.Title>Student ID Card</Card.Title>
          <p><FaUser color="#3498db" style={{verticalAlign:"-2px"}}/><strong> Name:</strong> Muhammad Ahsan Tahseen </p>
          <div className="d-flex">
          <p><GiAges color="#3498db"  style={{verticalAlign:"-2px"}}/><strong> Age:</strong> 19 </p>
          
          <p style={{marginLeft:"24px"}}><FaUniversity color="#3498db" style={{verticalAlign:"-2px"}}/><strong> Department:</strong> Computer Science </p>
          </div>
          <p><FaPhone color="#3498db"   style={{verticalAlign:"-2px"}}/><strong> Contact Number:</strong> +92 33114208 </p>
          
          <p><FaHome color="#3498db" style={{verticalAlign:"-2px"}}/><strong> Address:</strong> Consectetur amet occaecat aute voluptate anim ipsum. </p>
          
        </Card.Body>
      </Card>
    </>
  )
}

export default CardComponent

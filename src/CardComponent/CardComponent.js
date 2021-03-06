import React,{useEffect,useContext} from 'react'
import {Card,Button} from 'react-bootstrap'
import {FaHome,FaUser,FaPhone,FaUniversity} from 'react-icons/fa'

import {GiAges,FcDepartment} from 'react-icons/all'
import {DataContext} from "../Contexts/DataContext"


const CardComponent = (props) => {
  const [Data]=useContext(DataContext);
useEffect(() => {
    console.log(Data)
}, )

  return (
    <>
      <Card style={{maxWidth:"450px",border:"1px solid black"}} className="d-flex m-2" onClick={props.click}>
        <Card.Body>
          <Card.Title>Student ID Card</Card.Title>
          <p><FaUser color="#3498db" style={{verticalAlign:"-2px"}}/><strong> Name: </strong>{props.name}</p>
          <div className="d-flex">
          <p><GiAges color="#3498db"  style={{verticalAlign:"-2px"}}/><strong> Age: </strong>{props.age}</p>
          
          <p style={{marginLeft:"24px"}}><FaUniversity color="#3498db" style={{verticalAlign:"-2px"}}/><strong> Department: </strong>{props.department}</p>
          </div>
          <p><FaPhone color="#3498db"   style={{verticalAlign:"-2px"}}/><strong> Contact Number: </strong>{props.number.intlPhoneNumber}</p>
          
          <p><FaHome color="#3498db" style={{verticalAlign:"-2px"}}/><strong> Address: </strong>{props.address}</p>
          
        </Card.Body>
      </Card>
    </>
  )
}

export default CardComponent

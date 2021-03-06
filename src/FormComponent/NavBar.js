import React, { useContext } from 'react'
import {Col,Row,Button,Navbar} from 'react-bootstrap'
import {FaSave,FiTrash} from 'react-icons/all'
import {DataContext} from '../Contexts/DataContext'


const NavBar = () => {
    const [Data,setData]=useContext(DataContext);
    const deleteCards=()=>{
        let oldArray=[...Data];
        oldArray.splice(0,oldArray.length)
        setData(oldArray)
    }
    return (
        <div>
         <Row style={{padding:"5px",backgroundColor:"#007BFF"}}><Col>
          <Navbar inline="true" className="justify-content-between" expand="lg" style={{color:"white"}} >
    <h3>Card Generator 1.1</h3>

    <div style={{color:"white"}}>
    <Button  variant="danger" onClick={()=>deleteCards()}>Clear <FiTrash style={{verticalAlign:"middle"}}></FiTrash></Button> 
    <Button className="m-2" variant="success">Save <FaSave style={{verticalAlign:"middle"}}></FaSave></Button> 
    </div>

</Navbar></Col></Row>
        </div>
    )
}

export default NavBar;

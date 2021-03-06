    
import React, { useContext,useState } from 'react'
import {Col,Row,Button,Navbar,Alert} from 'react-bootstrap'
import {FaSave,FiTrash} from 'react-icons/all'
import {DataContext} from '../Contexts/DataContext'


const NavBar = () => {
    const [Show,setShow]=useState(false)
    const [Data,setData]=useContext(DataContext);
    const [DelStatus,setDelStatus]=useState("")
    const [DelStatusMessage,setDelStatusMessage]=useState("")
    
    let Delmessage=null
    
    const deleteCards=()=>{
        let oldArray=[...Data];
        if(oldArray.length===0){
            setDelStatus("danger")
            setDelStatusMessage("Error! There are no Cards Present!")
           setShow(true)
        }
        else{
        oldArray.splice(0,oldArray.length)
        setData(oldArray)
        setDelStatus("success")
        setDelStatusMessage("Success! Cards Deleted!!")
        setShow(true)
        }
    }
    if(Show){
        Delmessage=(
            <Alert variant={DelStatus} transition="fade" onClose={() => setShow(false)} dismissible>
            <strong>{DelStatusMessage}</strong>
            </Alert>
        )
    }
    return (
        <div>
         <Row style={{padding:"5px",backgroundColor:"#007BFF"}}><Col>
          <Navbar inline="true" className="justify-content-between" expand="lg" style={{color:"white"}} >
    <h3>Card Generator 1.1</h3>
 
    <div style={{color:"white"}}>
    <Button  variant="danger" onClick={()=>deleteCards()} >Clear <FiTrash style={{verticalAlign:"middle"}}></FiTrash></Button> 
    <Button className="m-2" variant="success">Save <FaSave style={{verticalAlign:"middle"}}></FaSave></Button> 
    </div>

</Navbar></Col></Row>
{Delmessage}
        </div>
    )
}

export default NavBar;

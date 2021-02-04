import React, { useState,useContext} from "react";
import "./App.css";
import {Container,Row,Col,Navbar,Button} from 'react-bootstrap';
import FormComponent from "./FormComponent/FormComponent"
import {DataProvider} from "./Contexts/DataContext"
import CardLists from "./CardComponent/CardLists"
import {FaSave,FiTrash} from 'react-icons/all'



const App = () => {

  return (
    <DataProvider>
    <div>
      <Container fluid>
        <Row style={{padding:"5px",backgroundColor:"#007BFF"}}><Col>
          <Navbar inline="true" className="justify-content-between" expand="lg" style={{color:"white"}} >
    <h3>Card Generator 1.1</h3>

    <div style={{color:"white"}}>
    <Button  variant="danger">Clear <FiTrash style={{verticalAlign:"middle"}}></FiTrash></Button> 
    <Button className="m-2" variant="success">Save <FaSave style={{verticalAlign:"middle"}}></FaSave></Button> 
    </div>

</Navbar></Col></Row>
        <Row style={{padding:"5px"}} className="HeightFix" ><Col>
          
          <FormComponent></FormComponent>
          </Col>
          <Col >
          <CardLists></CardLists>
          </Col>
          </Row> 
          <Row style={{background:"#007BFF"}}><Col className="text-center"> 
          
          <div className="sticky-bottom"> 
            <Navbar expand="lg" style={{color:"white"}}>
                 
                    <p className="text-center">@2021 Made By Ahsan Tahseen, Powered By React</p>
                
            </Navbar>
            </div> 
            </Col></Row>
        
      </Container>
    </div>
    
    </DataProvider>
  )
}

export default App


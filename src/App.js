import React, { Component } from "react";
import "./App.css";
import uuid from "react-uuid";
import {Container,Row,Col} from 'react-bootstrap';
import CardComponent from "./CardComponent/CardComponent"
import FormComponent from "./FormComponent/FormComponent"



const App = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{padding:"5px"}}><Col style={{border:"3px solid black"}}><h1>Header</h1></Col></Row>
        <Row style={{padding:"5px",height:"auto"}}><Col md="3" style={{border:"3px solid black"}}>
          <h3 className="mb-3">Form</h3>
          <FormComponent></FormComponent>
          </Col>
          <Col style={{border:"3px solid black"}}><h3>Cards</h3><p>Minim officia qui ea id eu consequat consectetur. Amet voluptate consequat ullamco est ipsum incididunt adipisicing magna ea cupidatat. Excepteur ullamco exercitation dolore labore.</p>
          <CardComponent></CardComponent>
          
          </Col>
          </Row>
          
        <Row style={{padding:"5px",position:"sticky"}}><Col style={{border:"3px solid black"}}><h1>Footer</h1></Col></Row>
      </Container>
    </div>
  )
}

export default App


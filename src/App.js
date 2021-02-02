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
        <Row style={{background:"#2c3e50",padding:"5px"}}><Col style={{border:"3px solid white"}}><h1>Header</h1></Col></Row>
        <Row class="h-100" style={{background:"#7f8c8d",padding:"5px",height:"100vh"}}><Col md="3" style={{border:"3px solid white"}}>
          <h3 className="mb-3">Form</h3>
          <FormComponent></FormComponent>
          </Col>
          <Col style={{border:"3px solid white"}}><h3>Cards</h3><p>Minim officia qui ea id eu consequat consectetur. Amet voluptate consequat ullamco est ipsum incididunt adipisicing magna ea cupidatat. Excepteur ullamco exercitation dolore labore.</p></Col>
          </Row>
      </Container>
    </div>
  )
}

export default App


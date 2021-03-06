import React, {useContext} from "react";
import "./App.css";
import {Container,Row,Col,Navbar,Button} from 'react-bootstrap';
import FormComponent from "./FormComponent/FormComponent"
import {DataProvider} from "./Contexts/DataContext"
import CardLists from "./CardComponent/CardLists"
import NavBar from "./FormComponent/NavBar"




const App = () => {



  return (
    <DataProvider>
    <div>
      <Container fluid>
        <NavBar></NavBar>
        <Row style={{padding:"5px"}} className="HeightFix" ><Col>
          
          <FormComponent></FormComponent>
          </Col>
          <Col>
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


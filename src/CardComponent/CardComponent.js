import React from 'react'
import {Card,Button} from 'react-bootstrap'

const CardComponent = () => {
  return (
    <>
      <Card style={{maxWidth:"400px"}} className="d-flex justify-content-center text-center">
        <Card.Body>
          <Card.Title>Student Card</Card.Title>
          <Card.Text>Deserunt proident ex aliquip sunt esse cillum magna consectetur.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardComponent

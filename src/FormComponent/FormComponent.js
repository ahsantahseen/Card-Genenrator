
import React,{useState} from 'react'
import {Form,Button,Alert} from 'react-bootstrap'
import IntlTelInput from 'react-bootstrap-intl-tel-input'

const FormComponent = () => {
    const [Validated, setValidated] = useState(true)
    const [number, setnumber] = useState('')

    const onChangeHandler=(data)=>{
        setnumber(data)
        
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
      };
    return (
        <>
        <Form  validated={Validated} onSubmit={handleSubmit}>
            <Form.Group id="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Please enter full name here" type="text" required maxLength={50} minLength={5}></Form.Control>
                
                
            </Form.Group>
            
            <Form.Group id="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control placeholder="Please enter age here" required type="number"></Form.Control>     
            </Form.Group>
            
            <Form.Label>Contact Number</Form.Label>
            <IntlTelInput required
            preferredCountries={['PK']}
  defaultCountry={'PK'}
  onChange={(data)=>onChangeHandler(data)}
 
  
  ></IntlTelInput>
            {number.valid?<p style={{color:"green"}}>{number.friendlyMessage}</p>:<p style={{color:"red"}}>{number.friendlyMessage}</p>}
            
            <Form.Group id="formDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control placeholder="Please enter department here" type="text" required></Form.Control>
            </Form.Group>
            
            <Form.Group id="formAddress">
                <Form.Label>Home Address</Form.Label>
                <Form.Control placeholder="Please enter home address here" type="text" required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.File id="formAddress" label="Picture" type="image" required></Form.File>
                <Form.Text>Please upload a picture for card (limit 3 mb)</Form.Text>
            </Form.Group>
            <Button type="submit" className="w-100 text-center mt-2">Create Card</Button> 
        </Form>
        </>
    )
}

export default FormComponent

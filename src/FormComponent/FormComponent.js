
import React,{useState,useContext,useRef} from 'react'
import {Form,Button,Alert} from 'react-bootstrap'
import IntlTelInput from 'react-bootstrap-intl-tel-input'
import {DataContext} from "../Contexts/DataContext"



const FormComponent = () => {
    const [Data,setData]=useContext(DataContext);
    const FormRef=useRef(null);
     
    const [Validated, setValidated] = useState(true)
    
    const [number, setnumber] = useState([])
    const [name, setname] = useState('')
    const [age, setage] = useState()
    const [department, setdepartment] = useState('')
    const [address,setaddress]=useState('')
    const [phoneInputReset, setphoneInputReset] = useState(false)

   
    const setNumber=(data)=>{
        setnumber(data)
        console.log(number)
    }
    const setName=(e)=>{
        setname(e.target.value)
    }
    const setAge=(e)=>{
        setage(e.target.value)
    }
    const setDepartment=(e)=>{
        setdepartment(e.target.value)
    }
    const setAddress=(e)=>{
        setaddress(e.target.value)
    }
    const HandleReset=()=>{
        FormRef.current.reset();
        setValidated(false);
    
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

        }
        setValidated(true)
        setData((prevData)=>[
            ...prevData,{
                name:name,age:age,department:department,address:address,number:number
            },
        ]);
    setphoneInputReset(true)
    HandleReset();
          };    
    return (
        <>
        <Form  ref={FormRef} validated={Validated} onSubmit={handleSubmit}>
            <Form.Group id="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Please enter full name here" onChange={setName}type="text" required maxLength={50} minLength={5}></Form.Control>
                
                
            </Form.Group>   
            
            <Form.Group id="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control placeholder="Please enter age here" onChange={setAge} required type="number"></Form.Control>     
            </Form.Group>
            
            <Form.Label>Contact Number</Form.Label>
            <IntlTelInput required
            preferredCountries={['PK']}
  defaultCountry={'US'}
  onChange={(data)=>setNumber(data)}
  reset={phoneInputReset}
  defaultValue={'+0'}
 
  
  ></IntlTelInput>
            {number.valid?<p style={{color:"green"}}>{number.friendlyMessage}</p>:<p style={{color:"red"}}>{number.friendlyMessage}</p>}
            
            <Form.Group id="formDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control placeholder="Please enter department here" onChange={setDepartment} maxLength={20} minLength={3} type="text" required></Form.Control>
            </Form.Group>
            <Form.Group id="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Please enter address here" onChange={setAddress} maxLength={120} minLength={15} type="text" required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.File id="formAddress" label="Picture" type="image" required></Form.File>
                <Form.Text>Please upload a picture for card (limit 3 mb)</Form.Text>
            </Form.Group>
            <Button type="submit" className="w-100 text-center mb-2">Create Card</Button> 
        </Form>
        </>
    )
}

export default FormComponent

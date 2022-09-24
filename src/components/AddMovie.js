import React, { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';


function AddMovie({setMovie , movie}) {
const [name,setName]=useState(" ")
const [url,setUrl]=useState(" ")
const [rate,setRate]=useState(0)
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const addmovie =(newmovie)=>{
 setMovie([...movie,newmovie])
}
const handleSubmit = ()=>{
  let newmovie={
    id:Math.random(),
    name:name,
    url:url,
    rate:rate,
  }
  addmovie(newmovie);
  setName(" ");
  setUrl(" ");
  setRate(" ")
  setShow(false)
}
console.log(movie)
return (
  <>
    <Button variant="primary" onClick={handleShow}>
  Add new Movie
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header >
        <Modal.Title>add new movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>movie name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>movie url</Form.Label>
        <Form.Control type="text" placeholder="Enter url" onChange={(e)=>setUrl(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>movie rate</Form.Label>
        <Form.Control type="number" placeholder="Enter rate" onChange={(e)=>setRate(e.target.value)} />
      </Form.Group>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}
export default AddMovie;
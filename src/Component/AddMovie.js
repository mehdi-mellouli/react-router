import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Button,Form,Modal} from 'react-bootstrap';

const AddMovie = ({handleAddMovie}) => {
const [input,setInput]=useState([
    { 
        title :"",
        description : "",       
        imgURL : "",
        trailerURL:"",
        rating : "",
        id : uuidv4()
    }
  ])
  // console.log(input)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    };
    const handleSave = () => {
      handleAddMovie(input)
      setShow(false)
    };
  return (
    <>
      <Button  onClick={handleShow} id='add-movie-btn' >
        Add your Movie 
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton id='modal'>
          <Modal.Title id='form-label' >Add your movie </Modal.Title>
        </Modal.Header>
        <Modal.Body id='modal'>
          <Form>
            <Form.Group  className="mb-3" >
              <Form.Label id='form-label' >Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your movie name here"
                name = "title"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label id='form-label' >description</Form.Label>
              <Form.Control
                type="text"
                placeholder="tell us about your movie"
                name ="description"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label id='form-label' >imageURL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://your image address "
                name ="imgURL"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label  id='form-label' >trailerURL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://your trailer address"
                name='trailerURL'
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label id='form-label' >Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="rate from 0 to 5 stars"
                name='rating'
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id='modal'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMovie
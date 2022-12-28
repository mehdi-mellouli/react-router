import React from 'react'
import Form  from 'react-bootstrap/Form'
import { Search } from 'react-bootstrap-icons';
  const Filter = ({handleFilter}) => {
  return (
    <div>
      <Form className="d-flex justify-content-between" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{handleFilter(e.target.value)}}
            />
            <Search className="m-3 w-45 h-45 " id='search' />
          </Form>
    </div>
  )
}

export default Filter
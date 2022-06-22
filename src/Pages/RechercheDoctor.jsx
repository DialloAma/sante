import React from 'react'
import { Form } from "react-bootstrap";
import './recherchedoctor.css'

function RechercheDoctor() {
  return (
    <div className='Rech_container'>
        <div className='top'>
            <div className='search'>
               <h2>Filter Par Ville</h2>
               <Form.Select  style={{width:'80%',height:'40px',marginLeft:'10px',marginBottom:'5px'}}>
          <option >Select</option>
        </Form.Select>

            </div>
            <div className='search'>
               <h2>Filter Par Ville</h2>
               <Form.Select style={{width:'80%',height:'40px',marginLeft:'10px',marginBottom:'5px'}}>
          <option >Select</option>
        </Form.Select>

            </div>
            <div className='search'>
               <h2>Filter Par Ville</h2>
               <Form.Select  style={{width:'80%',height:'40px',marginLeft:'10px',marginBottom:'5px'}}>
          <option >Select</option>
        </Form.Select>

            </div>
        </div>
        
    </div>
  )
}

export default RechercheDoctor
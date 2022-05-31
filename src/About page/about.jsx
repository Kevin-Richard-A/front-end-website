import React from 'react'
import { ModalBody } from 'react-bootstrap'
import './ABOUT.css'

export const About = () => {
  return (
    <body className='bodys'>
        <ModalBody>
            <center>
                <h2 style={{color:'whitesmoke'}}>This is About Page</h2>
                <p style={{color:'whitesmoke'}}>Here we are going to get some details of web page supports</p>
                <hr size="20"/>
            </center>
        </ModalBody>

        <footer style={{color:'whitesmoke'}}>
        <center>
            <h1 style={{color:'yellow'}}>Contacts</h1> <br/>
        
        <h3>EMAIL ID </h3>   
            <p>kevinrichard01@gmail.com</p><br/>
        <h3>INSTAGRAM</h3> 
            <p>kevin_richard_a_01</p><br/>
        <h3>FACEBOOK</h3>   
            <p>KEVIN RICHARD A 01</p><br/>
        </center>
        </footer>
    </body>
)
}
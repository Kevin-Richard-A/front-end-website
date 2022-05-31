import React from 'react'
import { ModalBody } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './HOME.css'


function Home() {
    const navigate=useNavigate();
    return (
        <>
        <body className='home-body'>
            <ModalBody>
                <center>
                    <h1 className='h1' style={{color:'Brown',weight:'bold'}}>This My Home Page
                    <h3 style={{color:'purple', weight:'bold'}}>Click Login or Register</h3>
                    <button className='btn btn1' onClick={()=>navigate('/login')}>Login</button>                    
                    <button className='btn btn1' onClick={()=>navigate('/register')}>Register</button>                    
                    </h1>
                </center>
            </ModalBody>
        </body>
        </>
    )
}

export default Home
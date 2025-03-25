import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const About =() => {
  return (
    <Container id="about" className="my-5">
     
      <h1 className='text-start fs-1' >About Us</h1>
      
      <p className='text-start'>
        Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>


<div className='text-start'>

      <Button variant="primary">Read more</Button>
      </div>
    </Container>

    
  );
}

export default About;
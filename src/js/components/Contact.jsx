import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('sending');

        try {
            const response = await axios.post('/api/send-email', {
                name,
                email,
                message,
            });

            if (response.status === 200) {
                setStatus('sent');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <Container id="contact" className="my-5">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} controlId="formName">
                       <p className="text-start">Name</p>
                        <Form.Control
                            type="text"
                            placeholder=" your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formEmail">
                    <p className="text-start">Email</p>
                        <Form.Control
                            type="email"
                            placeholder="your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formMessage">
                    <p className="text-start">message</p>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="write your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Row>

                <br/>
               <div className='text-start'>
                <Button  variant="primary" type="submit">
                    Enviar
                </Button>
                </div>
                

                {status === 'sending' && <p>Sending....</p>}
                {status === 'sent' && <p>sent successfully.</p>}
                {status === 'error' && <p>Please try again.</p>}
            </Form>
        </Container>
    );
};

export default Contact;
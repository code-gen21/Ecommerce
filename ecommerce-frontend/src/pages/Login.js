import React,{useState} from 'react'
import { Button, Container,Row,Col,Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Signup.css';
import { useLoginMutation } from '../services/appApi';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [login,{isError,isLoading,error}]=useLoginMutation();
    function handleLogin(e){
        e.preventDefault();
        login({email,password});
    }
  return (
    <Container>
        <Row>
            <Col md={6} className="Login_form--container">
                <Form style={{width:"100%"}} onSubmit={handleLogin}>
                    <h1 className='mb-4'>Login to your account</h1>
                    {isError && <Alert variant='danger'>{error.data}</Alert>}
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} required onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button type="submit" disabled={isLoading}>Login</Button>
                    </Form.Group>
                    <p>Don't have an account?<Link to="/signup">Create Account</Link></p>
                </Form>
            </Col>
            <Col md={6} className="login_image--container"></Col>
        </Row>
    </Container>
  )
}

export default Login
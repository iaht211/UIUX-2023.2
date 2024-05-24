import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoIosHelpCircleOutline } from "react-icons/io";

const NavBar = () => {
    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="mx-auto align-items-center w-100">
                        <Form className="d-flex mx-auto search-form">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="search-input"
                                />
                                <Button variant="outline-success">Search</Button>

                            </InputGroup>
                        </Form>
                        <div className="nav-icons ml-auto">
                            <Button variant="link" className="nav-icon-btn" style={{ fontSize: '24px' }}><IoIosHelpCircleOutline /></Button>
                            <Button variant="link" className="nav-icon-btn" style={{ fontSize: '24px' }}><FaUser /></Button>
                            <Button variant="link" className="nav-icon-btn" style={{ fontSize: '24px' }}><FaCog /></Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;

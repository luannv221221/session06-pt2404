import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">
                        <div style={{ width: '50px' }}>
                            <img src='https://mosoftvn.com/images/logo.png' style={{ width: '100%' }} />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Trang chủ</Nav.Link>
                            <Nav.Link href="#action1">Giới thiệu</Nav.Link>
                            <Nav.Link href="#action1">Sản Phẩm</Nav.Link>
                            <Nav.Link href="#action1">Tin Tức</Nav.Link>
                            <NavDropdown title="Tài Khoản" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Đăng nhập</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Đăng Ký
                                </NavDropdown.Item>

                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
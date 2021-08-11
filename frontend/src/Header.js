import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const Header = () => {
    let user = JSON.parse(localStorage.getItem('user-info'))
    // console.log(user)
    const history = useHistory();
    function logOut()
    {
        localStorage.clear();
        history.push('/register')
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Courses</Navbar.Brand>
                <Nav className="mr-auto navbar">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                        <Link to="/">Course List</Link>
                        <Link to="/add">Add Courses</Link>
                        <Link to="/update">Update Course</Link>
                        <Link to="/search">Search Course</Link>
                        </>
                        :
                        <>
                        <Link to="/login">Login </Link>
                        <Link to="/register">Register</Link>
                        </>
                    }                   
                </Nav>
                {localStorage.getItem('user-info')?
                <Nav>
                    <NavDropdown title={user && user.name} style={{marginLeft:"400px"}}>
                        <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>
                :null
}
            </Navbar>
        </div>
    )
}

export default Header

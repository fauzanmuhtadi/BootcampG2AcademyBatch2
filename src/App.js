import React from 'react';
import './App.css';
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Layout, Content } from 'react-mdl';
import Main from './components/main';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        {/* <Header title="My Website" scroll>
          <Navigation>
            <Link to="/">Login</Link>
            <Link to="/addemployee">Add Employee</Link>
            <Link to="/assignment">Assignment</Link>
            <Link to="/listofemployee">List of Employee</Link>
          </Navigation>
        </Header> */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">PT. MANTAB BETUL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Employee" id="basic-nav-dropdown">
                <NavDropdown.Item href="/assignment">Assignment</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/addemployee">Add Employee</NavDropdown.Item>
                <NavDropdown.Item href="/listofemployee">List of Employee</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Department" id="basic-nav-dropdown">
                <NavDropdown.Item href="/adddepartment">Add Department</NavDropdown.Item>
                <NavDropdown.Item href="/listofdepartment">List of Department</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {/* <Drawer title="My Website">
          <Navigation>
          <Link to="/">Login</Link>
            <Link to="/addemployee">Add Employee</Link>
            <Link to="/assignment">Assignment</Link>
            <Link to="/listofemployee">List of Employee</Link>
          </Navigation>
        </Drawer> */}
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  )
}

export default App;

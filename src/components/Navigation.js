import {Container,Form,Nav,Navbar,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation ({setName}){
    return(
        <div>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setName(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
        </div>
    )
}
export default Navigation;
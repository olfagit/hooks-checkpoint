import {Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieCard({movie}){
    return(
        <div style={{margin:"10px"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.url} style={{height:"350px"}}/>
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    )
}
export default MovieCard;
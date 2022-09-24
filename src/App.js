
import './App.css';
import Navigation from './components/Navigation';
import MovieListe from './components/MovieListe';
import {moviesData} from './components/MovieData';
import {useState} from 'react';
import AddMovie from'./components/AddMovie';

function App() {
 
const [movie,setMovie]=useState(moviesData)
const[name,setName]=useState("")

return (
    <div className="App">
 <Navigation setName={setName}/>
 <MovieListe movie={movie} name={name}/>
 <AddMovie setMovie={setMovie} movie={movie}/>
    </div>
  );
}

export default App;

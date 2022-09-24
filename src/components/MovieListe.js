import MovieCard from './MovieCard'

function MovieListe({movie,name}){
  return(
    <div style={{display:"flex" , justifyContent:"space-between" , flexWrap :"wrap"}}>
        {
            movie.filter(el=>el.name.toLowerCase().includes(name.toLowerCase().trim())).map(el=> <MovieCard movie={el}/>)
        }
        
    </div>
)}

export default MovieListe;
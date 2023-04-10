import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieList() {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        axios.get('https://mcuapi.herokuapp.com/api/v1/movies')
            .then(results => {
                setMovieList(results.data.data)
            })
            .catch(error => console.log(error))
            
    }, [])



    const movies = movieList.map(movie => {
        return <div 
                    className="movieLink--container"
                    key={movie.id}  
                >
                    <Link 
                        to={`/movieList/${movie.title}`} 
                        state={movieList} 
                        className="list--link"
                    >
                    <img 
                        src={movie.cover_url} 
                        // style={{width: '20vw'}}
                    />
                    <h3>
                        {movie.title}   
                    </h3>
                    </Link>
                </div>

// return <div 
// className="movieLink--container"
// key={movie.id}  
// >
//     <img 
//         src={movie.cover_url} 
//         // style={{width: '20vw'}}
//     />
// <h3>
//     <Link 
//         to={`/movieList/${movie.title}`} 
//         state={movieList} 
//         className="list--link"
//     >
//         {movie.title}
//     </Link>
// </h3>
// </div>
    })

    return (
        <div className="MovieList">
            <h1>MCU Movies</h1>
            <div className="movieList--container">
              {movies}
            </div>
        </div>
    )
}

export default MovieList
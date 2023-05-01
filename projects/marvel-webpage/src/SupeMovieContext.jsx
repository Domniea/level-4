import axios from "axios";
import React from "react";
axios
import { useState, useEffect} from "react"

const SupeMovieList = React.createContext()

function SupeMovieListProvider(props) {
    const [movieList, setMovieList] = useState('')

    useEffect(() => {
        axios.get('https://mcuapi.herokuapp.com/api/v1/movies')
            .then(results => {
                setMovieList(results.data.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <SupeMovieList.Provider value={movieList}>
            {props.children}
        </SupeMovieList.Provider>
    )
}

export {SupeMovieList, SupeMovieListProvider}
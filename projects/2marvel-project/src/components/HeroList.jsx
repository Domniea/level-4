import {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

function HeroList(props) {

    const [heroList, setHeroList] = useState([])
    const testA = []
    const [heroA, setHeroA] = useState([]) 


    useEffect(() => {
      axios.get('https://akabab.github.io/superhero-api/api/all.json')
        .then(results => {
          const data = results.data
          setHeroList(data)

          data.map(x => {
            if(x.name[0] === 'A') {
              setHeroA(prevState => {
                return [
                  ...prevState, 
                  x
                ]
              })
            }
          })
        })
        .catch(error => console.log(error))
    }, [])

    const heros = heroList.map(hero => {
      return (
        <div 
          className="heroLink"
          key={hero.id}  
        >
          <h3>
            <img src={hero.images.sm} />
            <br></br>
            <Link 
              to={`/heroList/${hero.name}`} 
              state={heroList} 
            >
              {hero.name}
            </Link>
          </h3>
        </div>
        
      )
    })

    return (
        <div className="HeroList">
            <h1>Hero's</h1>
            <div className="heroList--container">
              {heros}
            </div>
        </div>
    )
}

export default HeroList
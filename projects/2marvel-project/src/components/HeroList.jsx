import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HeroList(props) {

  const [heroList, setHeroList] = useState([])
  const [heroAlphebetized, setHeroAlphabetized] = useState([])

    useEffect(() => {
      axios.get('https://akabab.github.io/superhero-api/api/all.json')
        .then(results => {
        const data = results.data
        data.map(hero => {
          if(hero.biography.publisher === 'Marvel Comics') {
            setHeroList(prevHero => {
              return [
                ...prevHero,
                hero
              ]
            })
          }
        })
          
         
        const getSections = (words) => {
          if (words.length === 0) {
            return [];
          }
          return Object.values(
            words.reduce((acc, word) => {
              let firstLetter = word.name[0];
              if (!acc[firstLetter]) {
                acc[firstLetter] = { title: firstLetter, data: [word] };
              } else {
                acc[firstLetter].data.push(word);
              }
              return acc;
            }, {})
          );
        }
    
         setHeroAlphabetized(getSections(data))
        })
        
        .catch(error => console.log(error))
    }, [])

    const heros = heroList.map(hero => {
      return (
        <div 
          className="heroLink--container"
          key={hero.id}  
        >
          <Link 
              to={`/heroList/${hero.name}`} 
              state={heroList} 
              className="list--link"
          >
          <img 
              src={hero.images.sm} 
              // style={{width: '20vw'}}
          />
          <h3>
              {hero.name}   
          </h3>
        </Link>
    </div>
        
      )
    })

    return (
        <div className="HeroList">
            <h1>Heros & Villians</h1>
            <div className="heroList--container">
              {heros}
            </div>
        </div>
    )
}

export default HeroList
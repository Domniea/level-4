import {useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link, Outlet } from "react-router-dom";
import wolverine from '/wolverine.png'

function Alphabet() {
  const [heroAlphebetized, setHeroAlphabetized] = useState([])

  const {letter} = useParams()

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
  
  useEffect(() => {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(results => {
          const data = results.data
          const justMarvel = []
          data.map(hero => {
              if(hero.biography.publisher === 'Marvel Comics') {
              justMarvel.push(hero)
              }
          })

          setHeroAlphabetized(getSections(justMarvel))
          })
      
      .catch(error => console.log(error))
  }, [])

  const group = heroAlphebetized.map(hero => {

     return <div key={hero.title}>
       <li>
        <Link 
            to={`/heros/${hero.title}`} 
            style={{fontSize: '1.5rem'}}
            state={heroAlphebetized} 
            className="alphabet--letter"
        >
          {hero.title}
        </Link>
      </li>
      </div>
    })

    console.log(!letter ? 'poop' : 'boobs')

  return (
      <div 
        className="Alphabet"
        >         
            <ul>
            {group} 
            </ul>
            <br></br>
            {
              !letter && 

              <div className="alphabet--home">
                <h1>Pick a letter to start</h1>
                <img src={wolverine} className="wolverine"/>
              </div>
            }
             <Outlet />
      </div>
  
    )
}

export default Alphabet
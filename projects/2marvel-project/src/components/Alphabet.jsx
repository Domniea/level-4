import {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Test from "./Test";
import HomeTest from "./HomeTest";
import LetterGroup from "./LetterGroup";
function Alphabet() {
    const [heroAlphebetized, setHeroAlphabetized] = useState([])


    const getSections = (words) => {
        if (words.length === 0) {
          return [];
        }
        return Object.values(
          words.reduce((acc, word) => {
            let firstLetter = word.name[0];
            // console.log(acc[firstLetter])
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

    const letter = heroAlphebetized.map(hero => {
       return <Link 
                key={hero.title}
                to={`/heros/${hero.title}`} 
                state={heroAlphebetized} 
                className="alphabet--letter"
            >
        {hero.title}
       </Link>
    })

    return (
        <div className="Alphabet">
          <nav>
                {letter} 
          </nav>
          <div className="alphabet--container">
            
          </div>
            <Outlet />
        </div>
   
    )
}

export default Alphabet
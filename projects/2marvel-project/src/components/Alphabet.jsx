import {useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link, Outlet } from "react-router-dom";

function Alphabet() {
  const [heroAlphebetized, setHeroAlphabetized] = useState([])
  const background = 'https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20200930162752/Marvel-Characters-32-thumb.jpg'

  const {id} = useParams()

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

  const letter = heroAlphebetized.map(hero => {
      // return <Link 
      //         key={hero.title}
      //         to={`/heros/${hero.title}`} 
      //         state={heroAlphebetized} 
      //         className="alphabet--letter"
      //     >
      // {hero.title}
      // </Link>
     return <>
       <li>
       <Link 
                key={hero.title}
                to={`/heros/${hero.title}`} 
                state={heroAlphebetized} 
                className="alphabet--letter"
            >
        {hero.title}
       </Link>
       </li>
       </>
  })

  return (
      <div 
        className="Alphabet"
        >         
            <ul>
            {letter} 
            </ul> 
             <Outlet />
      </div>
  
    )
}

export default Alphabet
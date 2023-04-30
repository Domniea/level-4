import {useState, useEffect} from "react";
import axios from "axios";
import {  Link} from "react-router-dom";

function Navbar() {
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
       return<>
       <li>
       <Link 
                key={hero.title}
                to={`/${hero.title}`} 
                state={heroAlphebetized} 
                className="alphabet--letter"
            >
        {hero.title}
       </Link>
       </li>
       </>
    })

    return (
        <nav className="Navbar">
          <ul></ul>
                {letter} 
        </nav>
   
    )
}

export default Navbar
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
// import Navbar from "./Navbar";

function LetterGroup(props) {
  const [heroAlphebetized, setHeroAlphabetized] = useState()

    const location = useLocation()
    const info = location.state

    const navigate = useNavigate()

    const getSections = (arr) => {
      if (arr.length === 0) {
        return [];
      }
      return Object.values(
        arr.reduce((acc, hero) => {
          let firstLetter = hero.name[0];
          if (!acc[firstLetter]) {
            acc[firstLetter] = { title: firstLetter, data: [hero] };
          } else {
            acc[firstLetter].data.push(hero);
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

    const {letter} = useParams()

    if (heroAlphebetized){
      const foundDetails = heroAlphebetized.find(x => x.title === letter)

          const heros = foundDetails.data.map(hero => {
        return (
          <div 
            className="heroLink--container"
            key={hero.id}  
          >
            <Link 
                to={`/heros/${letter}/${hero.name}`} 
                state={foundDetails} 
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
    
    

 

  console.log(letter)
      
  

    return (
        <div style={{ /*background: 'white',*/ height: '100vh'}} className="HeroList">
          <h1>Heros/Villains: {letter}</h1>
            <div className="heroList--container">
          {/* <Navbar /> */}
                {heros}    
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}
}
export default LetterGroup
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function LetterGroup(props) {
  const [heroAlphebetized, setHeroAlphabetized] = useState([])

    const location = useLocation()
    const info = location.state

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

    // console.log(heroAlphebetized)

    const {letter} = useParams()
    const foundDetails = info.find(x => x.title === letter)

    const navigate = useNavigate()

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
      
    
    // background: 'white',
    return (
        <div style={{ /*background: 'white',*/ height: '100vh'}} className="heroList">
          <h1>Heros/Villains: {letter}</h1>
            <div className="heroList--container">
                {heros}    
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}
export default LetterGroup
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LetterGroup(props) {

    const location = useLocation()
    const data = location.state

    const {letter} = useParams()
    const foundDetails = data.find(x => x.title === letter)

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
      
    // console.log(foundDetails)
    

    return (
        <div className="heroList">

            <div className="heroList--container">
                {heros}    
            </div>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
        </div>
    )
}
export default LetterGroup
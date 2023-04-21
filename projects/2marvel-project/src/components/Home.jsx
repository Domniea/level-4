import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";

function Home(props) {
    
    const heroData = []
    const [test, setTest] = useState(0)
    const [fighter1, setFighter1] = useState()

    const [fighter2, setFighter2] = useState()

    useEffect(() => {
        axios.get('https://akabab.github.io/superhero-api/api/all.json')
        .then(results => {
            const data = results.data
            
            data.map(hero => {
                if(hero.biography.publisher === 'Marvel Comics') {
                justMarvel.push(hero)
                }
            })
            heroData.push(justMarvel)
            getFighters()
            // const random = Math.floor(Math.random() * 269)
            // const random2 = Math.floor(Math.random() * 269)
            // const winningNumber = random > 269 ? random/2 : random
            // const winningNumber2 = random2 > 269 ? random2/2 : random2
            // setFighter1(heroData[0][winningNumber])
            // setFighter2(heroData[0][winningNumber2])
            
        })
        
        .catch(error => console.log(error))
    }, [])
   

    const [on, setOn] = useState(false)
    const justMarvel = []

    function toggle() {
        setOn(prevState => !prevState)
    }

    function getFighters() {
        const random = Math.floor(Math.random() * 269)
        const random2 = Math.floor(Math.random() * 269)
        const winningNumber = random > 269 ? random/2 : random
        const winningNumber2 = random2 > 269 ? random2/2 : random2
        setFighter1(heroData[0][winningNumber])
        setFighter2(heroData[0][winningNumber2])
        return (fighter1, fighter2)
    }    

    function determineWinner() {
        if (fighter1) {
            const breakdown1 = Object.entries(fighter1).map(([key,value]) => value)
            const statsObject1 = breakdown1[3]
            console.log(statsObject1)
            const stats1 = Object.values(statsObject1)
            const final1 = stats1.reduce((acc,cur) => {
                const final = acc + cur
                return final
            }, 0)

            const breakdown2 = Object.entries(fighter2).map(([key,value]) => value)
            const statsObject2 = breakdown2[3]
            console.log(statsObject2)
            const stats2 = Object.values(statsObject2)
            const final2 = stats2.reduce((acc,cur) => {
                const final = acc + cur
                return final
            }, 0)
    
            if(final1 > final2) {
                return alert(fighter1.name)
            } else {
                return alert(fighter2.name)
            }
        
    }
    }

    return(
        <div className="Home">
            <h1>Welcome Page</h1>
            <div className="welcomeBackground">
                <h2>Fight Of The Day!</h2>
                <div className="heroFight">
                   { fighter1 && <div className="fighter1">
                        <img src={fighter1.images.sm}/>
                        <h3>{fighter1.name}</h3>
                        { on &&
                            <ul><h3>Powerstats: </h3>
                                <li>intelligence: {fighter1.powerstats.intelligence}</li>
                                <li>Strength: {fighter1.powerstats.strength}</li>
                                <li>Speed: {fighter1.powerstats.speed}</li>
                                <li>Durability: {fighter1.powerstats.durability}</li>
                                <li>Power: {fighter1.powerstats.power}</li>
                                <li>Combat: {fighter1.powerstats.combat}</li>
                            </ul>
                        }
                    </div>}
                   { fighter2 && <div className="fighter2">
                    <img src={fighter2.images.sm} />
                        <h3>{fighter2.name}</h3>
                    { on &&
                            <ul><h3>Powerstats: </h3>
                                <li>intelligence: {fighter2.powerstats.intelligence}</li>
                                <li>Strength: {fighter2.powerstats.strength}</li>
                                <li>Speed: {fighter2.powerstats.speed}</li>
                                <li>Durability: {fighter2.powerstats.durability}</li>
                                <li>Power: {fighter2.powerstats.power}</li>
                                <li>Combat: {fighter2.powerstats.combat}</li>
                            </ul>
                        }
                    </div> }
                </div> 
                <div className="buttonContainer">
                    <button onClick={getFighters}>Get New Heros</button>
                    <button onClick={determineWinner}>Show Winner</button>
                    <button onClick={toggle}>Show Stats</button>
                </div>
            </div>
            </div>
    )
}

export default Home
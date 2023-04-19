import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";

function Home(props) {
    
    const heroData = []
    const [test, setTest] = useState(0)
    const [fighter1, setFighter1] = useState(
        // {
        //     name: 'boob',
        //     images: {
        //         sm:''
        //     },
        //     powerstats: {
        //         "intelligence": 0,
        //         "strength": 0,
        //         "speed": 17,
        //         "durability": 0,
        //         "power": 0,
        //         "combat": 0
        //     },
        // }
    )

    const [fighter2, setFighter2] = useState(
        // {
        //     name: 'butt',
        //     images: {
        //         sm:''
        //     },
        //     powerstats: {
        //         "intelligence": 0,
        //         "strength": 0,
        //         "speed": 0,
        //         "durability": 0,
        //         "power": 0,
        //         "combat": 0
        //     },
        // }
    )

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
            // const random = Math.floor(Math.random() * 269)
            // const random2 = Math.floor(Math.random() * 269)
            // const winningNumber = random > 269 ? random/2 : random
            // console.log(heroData)
            // setFighter1(heroData[0][winningNumber])
            // const winningNumber2 = random2 > 269 ? random2/2 : random2
            // setFighter2(heroData[0][winningNumber2])
        return (fighter1, fighter2)
    }    

    function determineWinner() {
        const hero1 = fighter1.powerstats.intelligence + fighter1.powerstats.strength +
                        fighter1.powerstats.speed + fighter1.powerstats.durability +
                        fighter1.powerstats.power + fighter1.powerstats.combat
        const hero2 = fighter2.powerstats.intelligence + fighter2.powerstats.strength +
                        fighter2.powerstats.speed + fighter2.powerstats.durability +
                        fighter2.powerstats.power + fighter2.powerstats.combat
        const winner = hero1 < hero2 ? hero1 : hero2
    }

   

    return(
        <div className="Home">
            <h1>Welcome Page</h1>
            <div className="welcomeBackground">
                <div className="heroFight">
                   { fighter1 && <div className="fighter1">
                        <img src={fighter1.images.sm} style={{height: '30vh', width: '20vw'}}/>
                        <h2>{fighter1.name}</h2>
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
                    <img src={fighter2.images.sm} style={{height: '30vh', width: '20vw'}}/>
                        <h2>{fighter2.name}</h2>
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
                    </div> }
                </div> 
            </div>
                <button onClick={getFighters}>Push</button>
                <button onClick={determineWinner}>Push</button>
                <button onClick={toggle}>Push</button>
            </div>
    )
}

export default Home
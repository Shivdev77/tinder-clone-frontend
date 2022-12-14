
import React , { useState , useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import axios from "./axios.js";
function TinderCards() {
    const [people, setpeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");
            setpeople(req.data);
        }
        fetchData();
    } , []);

   const swiped =  (direction , name) => {
    console.log("removing " + name);
   };

   const outOfFrame = (name) => {
    console.log(name + "left the screen");
   };
  return (
    <div className='tinder_cards'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple"></link>
        <div className="tinder_cards__container">
        {people.map((person) => (
            <TinderCard
             className='swipe'
            key={person.name}
            preventSwipe={["up" , "down"]}
            onSwipe={(dir) => swiped(dir,person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}
            >
                <div className="card" style={{backgroundImage: `url(${person.imgUrl})`}}>
                <h3 class="font-effect-shadow-multiple">{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
        
    </div>
  )
}

export default TinderCards
import React from 'react';
// import Navbar from '../Components/Navbar';
// import { Quote } from '../Components/Quote';
import './QuoteScreen.css';

import { Quote } from '../Components/Quote';

// import Footer from '../Components/Footer';


const Quotescreen = () => {

    const quotedata=[{
        "desc":"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
        "author":"Adam Scott"
    },{
        "desc":"Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
        "author":"Adelle Davis"
    },{
        "desc":"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
        "author":"Adelle Davis"
    },{
        "desc":"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
        "author":"Albert Einstein"
    },{
        "desc":"Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
        "author":"Alice May Brock"
    },{
        "desc":"Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, Your fatness is an affront to me, so we have the right to treat you as offensively as you appear. Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
        "author":"Anthelme Brillat-Savarin"
    },{
    "desc":"Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    "author":"Adelle Davis"},
    {
        "desc":"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
        "author":"Albert Einstein"
    },
    {
        "desc":"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
        "author":"Adelle Davis"
    }

]
  return (
    <>
    {/* <Navbar/> */}
    <div className='quote'>
        {quotedata.map((elem,index)=>{
            return(
                <Quote
                description={elem.desc}
                author={elem.author}
                key={index}
                />
            )
        })}
    <Quote description={"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding."}
    author={"Adam Scott"}
    />
    </div>

    {/* <Footer/> */}
   
    </>
  )
}

export default Quotescreen
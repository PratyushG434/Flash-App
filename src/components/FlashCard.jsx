import React from "react";
import { useState } from "react";


function FlashCard({ques,index,cards,setCards,time})
{ 
  const [isFlipped,setFlipped] = useState(false)
  function handleClick() {
    console.log('Clicked')
    console.log(isFlipped)
    setFlipped(!isFlipped)
    console.log(cards)
    handleProgress();
    document.getElementsByClassName("flip-card-inner")[0].classList.toggle("flip-card-click")

  }
  function handleProgress()
  {
    const id = cards.find((element)=> element==index);
    console.log(id);
    console.log(index)
    if(!isFlipped)
    {
      if(id==undefined && time >0)
      setCards([...cards,index])
    }
  }


   
    return(<div className="flip-card" onClick={handleClick}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>{ques.question}</h2>
          </div>
          <div className="flip-card-back">
            <h2>{ques.answer}</h2>
          </div>
        </div>
      </div>);
}

export default FlashCard

import './App.css'
import Progress from './components/Progress.jsx';
import CardSlider from './components/CardSlider.jsx';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import { color } from 'framer-motion';



function App() {

  const [cards,setCards] = useState([]);
  const [currTime,setTime] = useState(100);
  const [isStarted,setStarted] = useState(false);
  var addition = "";
  if(cards.length==10)
    addition ="Hurray!";

  useEffect(() => { 
    let interval;
    if(isStarted && currTime > 0) {
    interval = setInterval(() => {
        console.log(currTime);
        setTime(prev => prev-1);
        
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isStarted]);

  if(isStarted)
  {
  if(currTime>0 && cards.length<10)
  {
  return (
  <>
      <Progress currValue={currTime} text={currTime} maxValue={100}className='timer'/>

    
    <div className='container'>
      <Progress currValue={cards.length} maxValue={10} text={`${(cards.length) * 10}%`}/>
      <CardSlider cards={cards} setCards={setCards} time={currTime}/>
      
    </div>
  </>
    )
  }
  else
  {
    return (
      <>
          {/* <Progress currValue={currTime} text={currTime} maxValue={100} className='timer' style={{visibility:'hidden'}}/> */}
    
        
        <div className='container'>
          {/* <Progress currValue={cards.length} maxValue={10} text={`${(cards.length) * 10}%`}/> */}
          <h1 style={{color:"dodgerblue"}}> {addition} Your final score is {cards.length*10} !</h1>
          <CardSlider cards={cards} setCards={setCards}/>

        </div>
      </>
      )
  }
}
else
{
  return (
    <div className='container initial-container'>
    <h1 style={{color:"white"}}> Welcome to Flash Revision App.</h1>
    <Button variant="contained" sx={{fontFamily:'"Baloo 2", sans-serif', fontSize:"20px", textTransform:"none"}} onClick={()=>{setStarted(prev => !prev); setTime(100)}}>Get Started</Button>
    </div>
  );
}
}

export default App

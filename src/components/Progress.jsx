import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import flashcards from './contents';



function Progress({currValue,maxValue,text}) 
{

  
  console.log(currValue)
  return (
    <div id="progress" style={{ width: 100, height: 100 }}>
      <CircularProgressbar value={currValue} maxValue={maxValue||10} text={text} />
    </div>);
}

export default Progress
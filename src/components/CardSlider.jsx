import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlashCard from "./FlashCard";
import flashcards from "./contents";
import PaginatedList from "./PaginatedList";

const CardSlider = ({cards,setCards,time}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    
  };


  function anotherCard(index){
    setCurrentIndex(index);
  };
  // console.log(anotherCard);

  return (
    <div className="card-slider">
      
      <div className="card-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={flashcards[currentIndex].id} // Ensure the key is based on the current flashcard's ID
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 ,ease: [0.42, 0, 0.58, 1]}}
            className="card"
          >
            <FlashCard ques={flashcards[currentIndex]} index={currentIndex} cards={cards} setCards={setCards} time={time}/>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <PaginatedList data={cards} itemsPerPage={5} handleChange={anotherCard} />
      
      
    </div>
  );
};

export default CardSlider;
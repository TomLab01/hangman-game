import { useContext } from "react";
import dataContext from './dataContext'
import configContext from './configContext'
import { FRENCH_LAYOUT, ENGLISH_LAYOUT } from "./constants";
import './style.css';


function HangmanPicture() {
  const {data} = useContext(dataContext);
  const {config} = useContext(configContext);
  // middle of the game (show hearts)
  if (data.lives > 0 && data.spaces > 0) {
    return(
      <div className='hangman-container'>
        {new Array(data.lives).fill(0).map((elt,idx) => (
          <img className="heart-icon" src="/images/heart_icon.png" alt="" key={idx}/>
        ))}
      </div>
  )} 
  // end of the game with DEFEAT
  else if (data.lives === 0) {
    let layout = (config.language === "french") ? FRENCH_LAYOUT : ENGLISH_LAYOUT;
    return(
      <div className='hangman-container'>
        <p id="hangman-text-defeat">{layout.defeat.toUpperCase()}</p>
      </div>
  )}
  // end of the game with VICTORY
  else {
    let layout = (config.language === "french") ? FRENCH_LAYOUT : ENGLISH_LAYOUT;
    return(
      <div className='hangman-container'>
        <p id="hangman-text-victory">{layout.victory.toUpperCase()}</p>
      </div>
  )}}

export default HangmanPicture;

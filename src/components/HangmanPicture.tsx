import { useContext } from "react";
import dataContext from './dataContext'
// import configContext from './configContext'
import './style.css';


function HangmanPicture() {
  const {data} = useContext(dataContext);
  // const {config} = useContext(configContext);
  return(
    <div className='hangman-container'>
        <h1 id="hangman-text">{data.lives}</h1>
        <img src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png?v8" alt="" />
    </div>
  );
}

export default HangmanPicture;

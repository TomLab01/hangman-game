import { useContext } from "react";
import DataContext from './dataContext'
// import { hangmanDataType } from "./dataContext";
// import DicoContext from './dicoContext'
// import { hangmanDicoType } from "./dicoContext";
import './style.css';


function HangmanPicture() {
  const {data} = useContext(DataContext);
  // const {dico} = useContext(DicoContext);
  return (
    <div className='hangman-container'>
        <h1>{data.lives}</h1>
        <img src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png?v8" alt="" />
    </div>
  );
}

export default HangmanPicture;

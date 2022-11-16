import { useContext } from "react";
import DataContext from './dataContext'
// import { hangmanDataType } from "./dataContext";
// import DicoContext from './dicoContext'
// import { hangmanDicoType } from "./dicoContext";
import { wordFilter } from "./utils";
import './style.css';


// function wordFilter(word : string, knowledge : boolean[]) {
//   const letters : String[] = word.toUpperCase().split("");
//   let known_letters : String[] = 
//     letters.map((elt,index) => (knowledge[index] ? letters[index] : ""))
//   return(known_letters)
// }

function MysteryWord() {
  const {data} = useContext(DataContext);
  let word = data.word;
  let knowledge = data.knowledge;
  let known_letters = wordFilter(word,knowledge);
  return (
    <div className="word-container">
        <div className="container">
            {known_letters.map((elt,idx) => (
                <div className='word-letter' key={idx}>{elt}</div>
            ))}
        </div>
    </div>

  );
}

export default MysteryWord;

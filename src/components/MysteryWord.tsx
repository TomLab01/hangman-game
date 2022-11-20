import { useContext } from "react";
import dataContext from './dataContext'
// import { dataType } from "./dataContext";
// import configContext from './configContext'
// import { configType } from "./configContext";
import { wordFilter } from "./utils";
import './style.css';


// function wordFilter(word : string, knowledge : boolean[]) {
//   const letters : String[] = word.toUpperCase().split("");
//   let known_letters : String[] = 
//     letters.map((elt,index) => (knowledge[index] ? letters[index] : ""))
//   return(known_letters)
// }

function MysteryWord() {
  const {data} = useContext(dataContext);
  let known_letters = wordFilter(data.word,data.knowledge);
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

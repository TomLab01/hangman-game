import { useContext } from "react";
import DataContext from './dataContext'
import { hangmanDataType } from "./dataContext";
import DicoContext from './dicoContext'
import { hangmanDicoType } from "./dicoContext";
import './style.css';

import { getRandomInt } from "./utils";

const VISIBILITY = true;

function Toolbar() {
  const {data, setData} = useContext(DataContext);
  const {dico, setDico} = useContext(DicoContext);
  return (
    <div className="toolbar-container">
        <div className="container">
            <div className="toolbar-button"> 
              <button id="restart" onClick={restartButton(data,setData,dico)}> Restart </button>
            </div>
            <div className="toolbar-button"> 
              <button id="level" onClick={() => console.log(data.knowledge)}> Level : Difficult </button>
            </div>
            <div className="toolbar-button"> 
              <button id="language" onClick={languageButton(data,setData,dico,setDico)}>FRENCH</button> 
            </div>
            <div className="toolbar-button" onClick={aboutButton()}> 
              <button id="about">About</button> 
            </div>
        </div>
    </div>

  );
}

function restartButton(data:hangmanDataType, setData:any, dico:hangmanDicoType) : any {
  return(
    () => {
      let newWord : string = data.word;
      while (newWord === data.word) {
        newWord = dico.words[getRandomInt(0,dico.words.length)]
      }
      setData({word:newWord, knowledge:new Array(newWord.length).fill(VISIBILITY), lives:10, spaces:newWord.length});
      for (var i=0; i < dico.alphabet.length; i++) {
          const buttonLetter = document.getElementById("KB"+i) as HTMLButtonElement | null;
          if (buttonLetter != null) {buttonLetter.disabled = false ; buttonLetter.style.backgroundColor = "#777"}
      }
    }
  )
}

function aboutButton() {
  return(
    () => {
      console.log("ABOUT");
    }
  )
}

function languageButton(data:hangmanDataType, setData:any, dico:any, setDico:any) {
  return(
    async () => {
      // set new language
      const newLanguage = (dico.language === "french") ? "english" : "french";
      const file = (newLanguage === "french") ? "./data/french.txt" : "./data/english.txt";
      await fetch(file)
            .then(text => text.text())
            .then(text => setDico({language:newLanguage, 
                                   alphabet:dico.alphabet, 
                                   words:text.split("\n")}))
      console.log("Data " + newLanguage.toUpperCase() + " fetched !")
      let buttonLanguage = document.getElementById("language");
      if (buttonLanguage != null) {buttonLanguage.innerHTML = newLanguage.toUpperCase()};
    }
  )
}

export default Toolbar;

import { useContext } from "react";
import DataContext from './dataContext'
import { dataType } from "./dataContext";
import configContext from './configContext'
import { configType } from "./configContext";
import './style.css';

import { getRandomInt } from "./utils";

const VISIBILITY = true;

function Toolbar() {
  const {data, setData} = useContext(DataContext);
  const {config, setConfig} = useContext(configContext);
  return (
    <div className="toolbar-container">
        <div className="container">
            <div className="toolbar-button"> 
              <button id="restart" onClick={restartButton(data,setData,config)}> Restart </button>
            </div>
            <div className="toolbar-button"> 
              <button id="level" onClick={levelButton(config,setConfig)}> Level : Difficult </button>
            </div>
            <div className="toolbar-button"> 
              <button id="language" onClick={languageButton(data,setData,config,setConfig)}>FRENCH</button> 
            </div>
            <div className="toolbar-button" onClick={aboutButton()}> 
              <button id="about">About</button> 
            </div>
        </div>
    </div>

  );
}

function restartButton(data:dataType, setData:any, config:configType) : any {
  return(
    () => {
      // randomly select a new word
      let allWords : string[] = config.words[config.language]
      let newWord : string = data.word;
      while (newWord === data.word) {
        newWord = allWords[getRandomInt(0,allWords.length)]
      }
      // init the data state
      setData({
        word : newWord,
        knowledge : new Array(newWord.length).fill(VISIBILITY),
        lives : 10,
        spaces : newWord.length});
      // clean keyboard buttons
      for (var i=0; i < config.alphabet.length; i++) {
          const buttonLetter = document.getElementById("KB-"+config.alphabet[i]) as HTMLButtonElement | null;
          if (buttonLetter != null) {buttonLetter.disabled = false ; buttonLetter.style.backgroundColor = "#777"}
      }
    }
  )
}

function levelButton(config:any, setConfig:any) {
  return(
    () => {
      // update the game level
      let newLevel : number = (config.level + 1) % 3;
      setConfig({...config, level : newLevel});
      // update level button
      let buttonLevel = document.getElementById("level");
      if (buttonLevel != null) {buttonLevel.innerHTML = newLevel.toString()};
    }
  )
}

function languageButton(data:dataType, setData:any, config:any, setConfig:any) {
  return(() => {
      // update the config state
      const newLanguage = (config.language === "french") ? "english" : "french";
      setConfig({...config, language:newLanguage})
      console.log("Switch to " + newLanguage.toUpperCase())
      // update language button
      let buttonLanguage = document.getElementById("language");
      if (buttonLanguage != null) {buttonLanguage.innerHTML = newLanguage.toUpperCase()};
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

export default Toolbar;

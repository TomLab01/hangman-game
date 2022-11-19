import { useContext } from "react";
import DataContext from './dataContext'
import { dataType } from "./dataContext";
import configContext from './configContext'
// import { configType } from "./configContext";
import {FRENCH_LAYOUT, ENGLISH_LAYOUT} from "./constants";
import './style.css';


function Keyboard() {
    const {data, setData} = useContext(DataContext);
    const {config} = useContext(configContext);
    return (
        <div className="keyboard-container">
            <div className="container">
                {config.alphabet.map((elt:string) => (
                    <button className='keyboard-letter' id={'KB-'+elt} key={elt} onClick={keyboardClick(data,setData,config.alphabet,config.language,elt)}>
                        {elt.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>

  );
}
 
function keyboardClick(data : dataType,
                       setData : any, 
                       alphabet : string[],
                       language : string,
                       letter : string) : any {
    return(
        () => {
            const letterButton = document.getElementById("KB-"+letter) as HTMLButtonElement;
            let remainingLives : number = data.lives;
            let remainingSpaces : number = data.spaces;

            if (data.word.includes(letter)) {
                if (letterButton != null) {letterButton.disabled = true ; letterButton.style.backgroundColor = "rgb(94, 203, 136)"}
                // update the state data
                for (let k=0; k<data.word.length; k++) {
                    if (data.word[k] === letter) {data.knowledge[k] = true ; remainingSpaces -= 1}
                }
                // if VICTORY
                if (remainingSpaces === 0) {
                    for (let i=0; i < alphabet.length; i++) {
                        let buttonX = document.getElementById("KB-"+alphabet[i]) as HTMLButtonElement;
                        if (buttonX != null) {buttonX.disabled = true ; buttonX.style.backgroundColor = "rgb(94, 203, 136)"}
                    }
                    let layout = (language === "french") ? FRENCH_LAYOUT : ENGLISH_LAYOUT;
                    console.log(layout.victory.toUpperCase())
                }
            }
            else {
                if (letterButton != null) {letterButton.disabled = true ; letterButton.style.backgroundColor = "red";}
                // update the state data
                remainingLives -= 1;
                // if DEFEAT
                if (remainingLives === 0) {
                    for (let j=0; j < alphabet.length; j++) {
                        let buttonX = document.getElementById("KB-"+alphabet[j]) as HTMLButtonElement;
                        if (buttonX != null) {buttonX.disabled = true ; buttonX.style.backgroundColor = "red"}
                    }
                    let layout = (language === "french") ? FRENCH_LAYOUT : ENGLISH_LAYOUT;
                    console.log(layout.defeat.toUpperCase())
                };
            }

            setData({...data, lives:remainingLives, spaces:remainingSpaces});
        }
    )
}


export default Keyboard;

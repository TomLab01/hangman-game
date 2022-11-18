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
            const buttonObject = document.getElementById("KB-"+letter) as HTMLButtonElement;
            let remainingLives : number = data.lives;

            if (data.word.includes(letter)) {
                if (buttonObject != null) {
                    buttonObject.disabled = true;
                    buttonObject.style.backgroundColor = "green";}
                for (var k=0; k<data.word.length; k++) {
                    if (data.word[k] === letter) {data.knowledge[k] = true ; data.spaces -= 1}
                }
                // VICTORY
                if (data.spaces === 0) {
                    for (var i=0; i < alphabet.length; i++) {
                        let buttonI = document.getElementById("KB-"+alphabet[i]) as HTMLButtonElement;
                        if (buttonI != null) {buttonI.disabled = true ; buttonI.style.backgroundColor = "green"}
                    }
                    let hangmanText = document.getElementById("hangman-text");
                    let layout = (language === "french") ? FRENCH_LAYOUT : ENGLISH_LAYOUT;
                    if (hangmanText != null) {hangmanText.innerHTML = layout.victory.toUpperCase()}
                    console.log("VICTORY !")
                }
            }
            else {
                if (buttonObject != null) {
                    buttonObject.disabled = true;
                    buttonObject.style.backgroundColor = "red";}
                remainingLives -= 1;
                // DEFEAT
                if (remainingLives === 0) {
                    for (var j=0; j < alphabet.length; j++) {
                        let buttonI = document.getElementById("KB-"+alphabet[j]) as HTMLButtonElement;
                        if (buttonI != null) {buttonI.disabled = true ; buttonI.style.backgroundColor = "red"}
                    }
                    let hangmanText = document.getElementById("hangman-text");
                    console.log(hangmanText);
                    // let layout = (language === "french") ? FRENCH_LAYOUT : ENGLISH_LAYOUT;
                    if (hangmanText != null) {hangmanText.innerText = "eezeze" ; console.log("ke,de")} // layout.defeat.toUpperCase()}
                    console.log("DEFEAT !")
                };
            }

            setData({word:data.word, knowledge:data.knowledge, lives:remainingLives, spaces:data.spaces});
        }
    )
}


export default Keyboard;

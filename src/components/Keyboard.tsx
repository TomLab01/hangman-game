import { useContext } from "react";
import DataContext from './dataContext'
import { dataType } from "./dataContext";
import configContext from './configContext'
import { configType } from "./configContext";
import { GREEN, RED, VERBOSE } from "./constants";
import './style.css';

interface Iletter {
    letter: string
}

function Keyboard() {
    const { config } = useContext(configContext);
    return (
        <div className="keyboard-container">
            <div className="container">
                {config.alphabet.map((elt: string) => (<KeyboardLetter letter={elt} />))}
            </div>
        </div>

    );
}

function KeyboardLetter({ letter }: Iletter): JSX.Element {
    const { data, setData } = useContext(DataContext);
    const { config } = useContext(configContext);
    return (
        <button
            className='keyboard-letter'
            id={'KB-' + letter}
            key={letter}
            onClick={() => keyboardClick(data, setData, config, letter)}>
            {letter.toUpperCase()}
        </button>
    );
}

function keyboardClick(data: dataType, setData: (value: dataType) => void, config: configType, letter: string): any {
    const letterButton = document.getElementById("KB-" + letter) as HTMLButtonElement;
    // let remainingLives: number = data.lives;
    // let remainingSpaces: number = data.spaces;
    if (VERBOSE) { console.log(`Click on ${letter.toUpperCase()}`) };

    if (data.word.includes(letter)) {
        if (letterButton != null) { letterButton.disabled = true; letterButton.style.backgroundColor = GREEN }
        // update the state data
        for (let k = 0; k < data.word.length; k++) {
            if (data.word[k] === letter) { data.knowledge[k] = true; data.spaces -= 1 }
        }
        // if VICTORY
        if (data.spaces === 0) {
            for (let i = 0; i < config.alphabet.length; i++) {
                let buttonX = document.getElementById("KB-" + config.alphabet[i]) as HTMLButtonElement;
                if (buttonX != null) { buttonX.disabled = true; buttonX.style.backgroundColor = GREEN }
            }
            if (VERBOSE) { console.log(config.keywords.victory.toUpperCase()) };
        }
    }
    else {
        if (letterButton != null) { letterButton.disabled = true; letterButton.style.backgroundColor = RED; }
        // update the state data
        data.lives -= 1;
        // if DEFEAT
        if (data.lives === 0) {
            for (let k = 0; k < config.alphabet.length; k++) {
                let buttonX = document.getElementById("KB-" + config.alphabet[k]) as HTMLButtonElement;
                if (buttonX != null) { buttonX.disabled = true; buttonX.style.backgroundColor = RED }
            }
            let mysteryLetters = Array.from(document.getElementsByClassName("word-letter")) as HTMLDivElement[];
            for (let k = 0; k < data.word.length; k++) {
                if (!data.knowledge[k]) {
                    data.knowledge[k] = true;
                    mysteryLetters[k].style.color = RED;
                }
            }
            if (VERBOSE) { console.log(config.keywords.defeat.toUpperCase()) };

        };
    }
    setData({ ...data }); //, lives: remainingLives, spaces: remainingSpaces });
}

export default Keyboard;

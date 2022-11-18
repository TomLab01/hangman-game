import { useContext } from "react";
import DataContext from './dataContext'
import { hangmanDataType } from "./dataContext";
import DicoContext from './dicoContext'
// import { hangmanDicoType } from "./dicoContext";
import './style.css';


function Keyboard() {
    const {data, setData} = useContext(DataContext);
    const {dico} = useContext(DicoContext);
    return (
        <div className="keyboard-container">
            <div className="container">
                {dico.alphabet.map((elt:string) => (
                    <button className='keyboard-letter' id={'KB-'+elt} key={elt} onClick={keyboardClick(data,setData,dico.alphabet,elt)}>
                        {elt.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>

  );
}
 
function keyboardClick(data : hangmanDataType,
                       setData : any, 
                       alphabet : string[],
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
                if (data.spaces === 0) {
                    console.log("VICTORY !")
                    for (var i=0; i < alphabet.length; i++) {
                        const buttonI = document.getElementById("KB"+i) as HTMLButtonElement;
                        if (buttonI != null) {buttonI.disabled = true ; buttonI.style.backgroundColor = "green"}
                    }
                }
            }
            else {
                if (buttonObject != null) {
                    buttonObject.disabled = true;
                    buttonObject.style.backgroundColor = "red";}
                remainingLives -= 1;

                if (remainingLives === 0) {
                    console.log("DEFEAT !")
                    for (var j=0; j < alphabet.length; j++) {
                        const buttonI = document.getElementById('KB'+j) as HTMLButtonElement;
                        if (buttonI != null) {buttonI.disabled = true ; buttonI.style.backgroundColor = "red"}
                    }
                };
            }

            setData({word:data.word, knowledge:data.knowledge, lives:remainingLives, spaces:data.spaces});
        }
    )
}


export default Keyboard;

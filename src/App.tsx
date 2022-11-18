import React, {useLayoutEffect, useState} from 'react';

// COMPONENTS & STYLE
import Header from './components/Header';
import HangmanPicture from './components/HangmanPicture';
import Toolbar from './components/Toolbar';
import MysteryWord from './components/MysteryWord'
import Keyboard from './components/Keyboard'
import { getRandomInt } from './components/utils';
import './index.css';

// TYPES & CONTEXTS
import DataContext from './components/dataContext'
import {hangmanDataType, dataContextDefault} from './components/dataContext'
import DicoContext from './components/dicoContext'
import {hangmanDicoType, dicoContextDefault, ALPHABET} from './components/dicoContext'


function App() {

    const [hangmanData, setHangmanData] = useState<hangmanDataType>(dataContextDefault.data);

    const [hangmanDico, setHangmanDico] = useState<hangmanDicoType>(dicoContextDefault.dico);

    useLayoutEffect(() => {
        initData(setHangmanDico,setHangmanData)();
        console.log("Data FRENCH fetched !")
    }, []); // [] indicates that there are no dependencies to this useEffect (only run once at the begining)

    return(
        <DicoContext.Provider value={{dico:hangmanDico, setDico:setHangmanDico}}>
            <DataContext.Provider value={{data:hangmanData, setData:setHangmanData}}>
                <Header />
                <Toolbar />
                <HangmanPicture />
                <MysteryWord />
                <Keyboard />
            </DataContext.Provider>
        </DicoContext.Provider>
    )
}

function initData(setDico : any, setData : any) {
    return( async () => {
        const wordsDico = await fetchWords("./data/french.txt"); // wait till the dictionnary is loaded
        setDico({ // initiate the global state DICO
            language : "french", 
            alphabet : ALPHABET, 
            words : wordsDico,
            level : 0
        });
        let word : string = wordsDico[getRandomInt(0,wordsDico.length)]; // select a word by default
        setData({ // initiate the global state DATA
            word : word,
            knowledge : new Array(word.length).fill(true),
            lives : 5,
            spaces : word.length,
            language : 'french'});
    })
}

function fetchWords(filename : any) {
    return(fetch(filename).then(text => text.text()).then(text => text.split("\n")))
    // let res = await fetch("./data/french.txt");
    // let text = await res.text();
    // let words = text.split("\n")
    // return(words)
}

export default App;
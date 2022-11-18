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
import {dataType, dataStateDefault} from './components/dataContext'
import DicoContext from './components/configContext'
import {configType, configStateDefault, ALPHABET} from './components/configContext'


function App() {

    const [hangmanData, setHangmanData] = useState<dataType>(dataStateDefault.data);

    const [hangmanConfig, setHangmanConfig] = useState<configType>(configStateDefault.config);

    useLayoutEffect(() => {
        initData(setHangmanConfig,setHangmanData)();
        console.log("Data FRENCH fetched !")
    }, []); // [] indicates that there are no dependencies to this useEffect (only run once at the begining)

    return(
        <DicoContext.Provider value={{config:hangmanConfig, setConfig:setHangmanConfig}}>
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

function initData(setConfig : any, setData : any) {
    return( async () => {
        const wordsDico = await fetchWords("./data/french.txt"); // wait till the dictionnary is loaded
        setConfig({ // initiate the global state hangmanConfig
            language : "french", 
            alphabet : ALPHABET, 
            words : wordsDico,
            level : 0
        });
        let word : string = wordsDico[getRandomInt(0,wordsDico.length)]; // select a word by default
        setData({ // initiate the global state hangmanData
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
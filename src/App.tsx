import {useLayoutEffect, useState} from 'react';

// COMPONENTS & STYLE
import Header from './components/Header';
import HangmanPicture from './components/HangmanPicture';
import Toolbar from './components/Toolbar';
import MysteryWord from './components/MysteryWord'
import Keyboard from './components/Keyboard'
import {initData, updateTextDisplays} from './components/utils';
import './index.css';

// TYPES & CONTEXTS
import DataContext from './components/dataContext'
import {dataType, dataStateDefault} from './components/dataContext'
import DicoContext from './components/configContext'
import {configType, configStateDefault} from './components/configContext'

// CONSTANTS
import { VERBOSE } from './components/constants';

function App() {

    const [hangmanData, setHangmanData] = useState<dataType>(dataStateDefault.data);

    const [hangmanConfig, setHangmanConfig] = useState<configType>(configStateDefault.config);

    useLayoutEffect(() => {
        initData(setHangmanConfig,setHangmanData)();
        if (VERBOSE) {console.log("Data FRENCH fetched !")};
        updateTextDisplays("french",0);
    }, []); // [] indicates that there are no dependencies to this useEffect (only run once at the begining)

    return(
        <DicoContext.Provider value={{config:hangmanConfig, setConfig:setHangmanConfig}}>
            <DataContext.Provider value={{data:hangmanData, setData:setHangmanData}}>
                <Header />
                <Toolbar />
                <HangmanPicture />
                <MysteryWord />
                <Keyboard />
                <div id="copyright">
                    <div>Tom Labiausse &copy; 2022</div>
                </div>
            </DataContext.Provider>
        </DicoContext.Provider>
    )
}

export default App;
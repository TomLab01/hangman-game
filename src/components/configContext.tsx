import React from 'react';

enum hangmanLevelType {
    easy = 0,
    middle = 1,
    difficult = 2,
}

export type configType = {
    language : string, // french - english
    alphabet : string[], // list of characters allowed in the language
    words : {[key: string]: string[]}, // list of words available in the language
    level : number, // EASY = 0, MIDDLE = 1, DIFFICULT = 2
};

export type configStateType = {
    config : configType,
    setConfig : (value:configType)=>void,
};

export const configStateDefault = {
    config : {language : "",
            alphabet : [],
            words : {"":[]},
            level : 0},
    setConfig : () => {},
}

const configContext = React.createContext<configStateType>(configStateDefault);

export default configContext;
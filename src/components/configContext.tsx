import React from 'react';

export type configType = {
    language : string, // french - english
    alphabet : string[], // list of characters allowed in the language
    words : {[key: string]: string[]}, // list of words available in the language
    level : number, // EASY = 0, MIDDLE = 1, DIFFICULT = 2
};

export type configStateType = {
    config : configType,
    setConfig : any,
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
import React from 'react';

export type hangmanDicoType = {
    language : string, // french - english
    alphabet : string[], // list of characters allowed in the language
    words : string[], // list of words available in the language
    level : number, // EASY = 0, MIDDLE = 1, DIFFICULT = 2
};

export type dicoContextType = {
    dico : hangmanDicoType,
    setDico : any,
};

export const ALPHABET : string[] = 'abcdefghijklmnopqrstuvwxyz'.split("");

export const dicoContextDefault = {
    dico : {language : "",
            alphabet : [""],
            words : [],
            level : 0},
    setDico : () => {},
}

const DicoContext = React.createContext<dicoContextType>(dicoContextDefault);

export default DicoContext;
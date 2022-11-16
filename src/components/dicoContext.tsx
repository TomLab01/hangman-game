import React from 'react';

export type hangmanDicoType = {
    language : string, // french - english
    alphabet : string[], // list of characters allowed in the language
    words : string[], // list of words available in the language
};

export type dicoContextType = {
    dico : hangmanDicoType,
    setDico : any,
};

export const ALPHABET : string[] = 'abcdefghijklmnopqrstuvwxyz'.split("");

export const dicoContextDefault = {
    dico : {language : "french",
            alphabet : ALPHABET,
            words : []},
    setDico : () => {},
}

const DicoContext = React.createContext<dicoContextType>(dicoContextDefault);

export default DicoContext;
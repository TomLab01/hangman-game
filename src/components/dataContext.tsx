import React from 'react';

export type hangmanDataType = {
    word : string,
    knowledge : boolean[], // indicate which letters of the word are known/unknown
    lives : number, // number of allowed errors 
    spaces : number, // number of spaces/letters yet to be discovered : goes from word.length to 0
};

export type dataContextType = {
    data : hangmanDataType,
    setData : any,
};

export const dataContextDefault = {
    data : {word : 'hangman',
            knowledge : new Array(7).fill(false),
            lives : 3,
            spaces : 7},
    setData : () => {},
}

const DataContext = React.createContext<dataContextType>(dataContextDefault);

export default DataContext;
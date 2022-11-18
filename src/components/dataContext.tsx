import React from 'react';

export type dataType = {
    word : string,
    knowledge : boolean[], // indicate which letters of the word are known/unknown
    lives : number, // number of allowed errors 
    spaces : number, // number of spaces/letters yet to be discovered : goes from word.length to 0
};

export type dataStateType = {
    data : dataType,
    setData : any,
};

export const dataStateDefault = {
    data : {word : 'hangman',
            knowledge : new Array(7).fill(false),
            lives : 3,
            spaces : 7},
    setData : () => {},
}

const dataContext = React.createContext<dataStateType>(dataStateDefault);

export default dataContext;
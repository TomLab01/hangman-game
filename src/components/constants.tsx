export const ALPHABET : string[] = 'abcdefghijklmnopqrstuvwxyz'.split("");

export const FRENCH_LAYOUT : any = {
    language : "french",
    restart : "Nouveau",
    level : "Niveau",
    levels : ["facile","moyen","difficile"],
    about : "A propos",
    title : "le pendu",
    victory : "victoire !",
    defeat : "perdu"
}

export const ENGLISH_LAYOUT : any = {
    language : "english",
    restart : "Restart",
    level : "Level",
    levels : ["easy","middle","difficult"],
    about : "About",
    title : "hangman",
    victory : "victory !",
    defeat : "game over"
}

export const LIVES_BY_LEVELS : number[] = [10,7,4];

export const VISIBILITY : boolean = false; // dev tool const
export const ALPHABET: string[] = 'abcdefghijklmnopqrstuvwxyz'.split("");

export type keywordsType = {
    language: string
    restart: string
    level: string
    levels: string[]
    about: string
    title: string
    victory: string
    defeat: string
}

export const FRENCH_KEYWORDS: keywordsType = {
    language: "french",
    restart: "Nouveau",
    level: "Niveau",
    levels: ["facile", "moyen", "difficile"],
    about: "A propos",
    title: "le pendu",
    victory: "victoire !",
    defeat: "perdu"
}

export const ENGLISH_KEYWORDS: keywordsType = {
    language: "english",
    restart: "Restart",
    level: "Level",
    levels: ["easy", "middle", "difficult"],
    about: "About",
    title: "hangman",
    victory: "victory !",
    defeat: "game over"
}

export const GREEN: string = "rgb(94, 203, 136)";

export const RED: string = "red";

export const LIVES_BY_LEVELS: number[] = [10, 7, 4]; // nb of heart/allowed errors for each level

export const VISIBILITY: boolean = false; // dev tool const

export const VERBOSE: boolean = false; // dev tool const
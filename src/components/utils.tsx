// useful functions

import {ALPHABET, FRENCH_LAYOUT, ENGLISH_LAYOUT, LIVES_BY_LEVELS} from "./constants";


export function initData(setConfig : any, setData : any) {
  return( async () => {
      // fetch words from .txt file
      let frenchWords = await fetchWords("./data/french.txt"); // wait till the dictionnary is loaded
      let englishWords = await fetchWords("./data/english.txt"); // wait till the dictionnary is loaded
      // init the config state (in french and level easy)
      setConfig({
          language : "french", 
          alphabet : ALPHABET, 
          words : {"french":frenchWords, "english":englishWords},
          level : 0
      });
      // init the data state (with a random french word)
      let word : string = frenchWords[getRandomInt(0,frenchWords.length)];
      setData({
          word : word,
          knowledge : new Array(word.length).fill(true),
          lives : LIVES_BY_LEVELS[0],
          spaces : word.length,
          language : 'french'
      });
  })
}


export function fetchWords(filename : any) {
  return(fetch(filename).then(text => text.text()).then(text => text.split("\n")))
  // let res = await fetch("./data/french.txt");
  // let text = await res.text();
  // let words = text.split("\n")
  // return(words)
}


export function getRandomInt(min : number, max : number) { // random integer in [min,max[
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


export function wordFilter(word : string, knowledge : boolean[]) {
  const letters : String[] = word.toUpperCase().split("");
  let known_letters : String[] = 
    letters.map((elt,index) => (knowledge[index] ? letters[index] : ""))
  return(known_letters)
}


export function updateTextDisplays(language : string, level : number) {
  let layout = (language === "french") ? FRENCH_LAYOUT : ENGLISH_LAYOUT;
  // title
  let title = document.getElementById("title");
  if (title != null)
    {title.innerHTML = layout.title.toUpperCase()};
  // restart
  let restartButton = document.getElementById("restart");
  if (restartButton != null)
    {restartButton.innerHTML = layout.restart};
  // language button
  let languageButton = document.getElementById("language");
  if (languageButton != null)
    {languageButton.innerHTML = layout.language.toUpperCase()};
  // level button
  let levelButton = document.getElementById("level");
  if (levelButton != null)
    {levelButton.innerHTML = layout.level + " : " + layout.levels[level].toUpperCase()};
  // about button
  let aboutButton = document.getElementById("about");
  if (aboutButton != null)
    {aboutButton.innerHTML = layout.about};
  return(null)
}     

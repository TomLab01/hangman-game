// useful functions

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
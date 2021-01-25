let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// #1 split the string into individual words
let storyWords = story.split(' ');
 
// #2 remeve unnecessary words and make new array: sample answer;
let betterWords = storyWords.filter(function(word) {
  return !unnecessaryWords.includes(word)
});

// console.log(betterWords.length);
// console.log(betterWords);

// #3 count over used words 
let countOverusedWords = betterWords.filter(function(word) {
  return overusedWords.includes(word)
});

// console.log(countOverusedWords.length);
// console.log(countOverusedWords);

//#3 count over used words sample answer:
let useReally = 0;
let useVery = 0;
let useBasically = 0;

for ( word of betterWords) {
  if ( word === "really") {
    useReally += 1;
  } else if ( word === "very") {
    useVery += 1;
  } else if ( word === "basically") {
    useBasically += 1;
  }
};

// #4 count sentences in this text sample answer;
let countSentence = 0;
betterWords.forEach(word => {
  if(word[word.length-1] === '.' || word[word.length-1] === '!') {
     countSentence += 1 ;
  }
});

// log answers
console.log(`The words count: ${storyWords.length}`);
console.log(`The sentence count: ${countSentence}`);
console.log(`The Really count: ${useReally}`);
console.log(`The Very count: ${useVery}`);
console.log(`The Basically count: ${useBasically}`);

console.log(betterWords.join(' '));

// remove overused words: sample answer;
let frequency = [];
let max = 0;
let result;

for (let word of betterWords) {
  word = word.toLowerCase().replace('"', ' ');
  frequency[word] = (frequency[word] || 0) + 1;
  if(frequency[word] > max){
    max = frequency[word];
    result = word;
  } 
}
console.log( `The most of frequency word is '${result}' , ${max} times.`);

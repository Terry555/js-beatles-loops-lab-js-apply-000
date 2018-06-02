const brits=["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const horns=["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts=["He was the last Beatle to learn to drive",
              "He was never a vegetarian",
              "He was a choir boy and boy scout",
              "He hated the sound of his own voice"];

function theBeatlesPlay(brits, horns) {
var array=[]
for (let i=0; i<4; i++) {
  array.push(`${brits[i]} plays ${horns[i]}`)
}
return array
}

function johnLennonFacts(facts){
var i=0;
var moreFacts=[];
while (i < facts.length){
  moreFacts.push(`${facts[i]}!!!`);
  i++;
}

return moreFacts;
}

function iLoveTheBeatles(x){
var love = [];
  do {
    if (x=7){
      love.push(`I love the Beatles!`);
      x++;
    } else if (x=17) {
      love.push(`I love the Beatles!`);
    } else {
      x=15;
    }
    }
    while (x<15);
    return love;
  }

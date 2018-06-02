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

function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push(`I love the Beatles!`)
    num++;
  } while(num<15);
  return array;
}

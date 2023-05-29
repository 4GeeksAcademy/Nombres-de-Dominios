var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
    for (let o =0; o < adj.length; o++) {
       for (let p =0; p < noun.length; p++) {
            console.log(pronoun[i] + adj[o] + noun[p] + ".com"); 
       }
    } 
}

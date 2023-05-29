var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var extensions = ['.com', '.net', '.us', '.io'];

for (let i = 0; i < pronoun.length; i++) {
    for (let o =0; o < adj.length; o++) {
       for (let p =0; p < noun.length; p++) {
        for (let l = 0; l < extensions.length; l++)
            console.log(pronoun[i] + adj[o] + noun[p] + extensions[l]); 
       }
    } 
}

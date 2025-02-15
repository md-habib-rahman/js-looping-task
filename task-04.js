// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = "I am a hard working person";

const newStatement = statement.split(" ").reverse();

console.log(newStatement.join(" "));
// 'person working hard a am I'

// const nlp = require('nlp');

// const spellChecker = async(string) => {
//     try{
//         const docOfString = nlp(string);
//         docOfString.terms().forEach(term => {
//             if (term.found) 
//               term.replaceWith(term.corrections[0]);
//         });

//         const correctedString = doc.text();
//         return correctedString;
//     }catch(err){
//         return err;
//     }
// }

// module.exports = spellChecker;
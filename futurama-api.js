const fetch = require('cross-fetch');

// const getQuote = async () => {
//     return fetch('http://futuramaapi.herokuapp.com')
//   const res = await ;
//   const body = await res.json();

//   const randomIndex = Math.random() * (300 - 1) + 1;

//   const mungedRes = {
//     name: body[randomIndex].character,
//     text: body[randomIndex].quote,
//     image: body[randomIndex].image
//   };
  
//   return mungedRes; 
// };

const getQuote = async () => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes');

  const body = await res.json();

  const singleQuote = body[Math.floor((Math.random() * 1000) + 1)];

  const mungedRes = {
    name: singleQuote.character,
    text: singleQuote.quote,
    image: singleQuote.image
  };
  
  return mungedRes; 
};

module.exports = getQuote;

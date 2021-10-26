const fetch = require('cross-fetch');

const getQuote = async () => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes');

  const body = await res.json();

  const singleQuote = body[Math.ceil((Math.random() * 20) + 1)];

  const mungedRes = {
    name: singleQuote.character,
    text: singleQuote.quote,
    image: singleQuote.image
  };
  
  return mungedRes; 
};

module.exports = getQuote;

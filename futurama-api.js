const fetch = require('cross-fetch');

const getQuote = async () => {
  const res = await fetch('http://futuramaapi.herokuapp.com');
  const body = await res.json();

  //   const mungedRes = {
  //     name: res.,
  //     text: expect.any(String),
  //     image: expect.any(String)
  //   };

  //   return mungedRes;

  console.log(body);
};

module.exports = getQuote;


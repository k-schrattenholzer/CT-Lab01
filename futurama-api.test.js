const getQuote = require('./futurama-api.js');

describe('should fetch a single quote from the futurama API', async () => {
  const quote = await getQuote();
    
  expect(quote).toEqual({
    name: expect.any(String),
    text: expect.any(String),
    image: expect.any(String)
  });
});

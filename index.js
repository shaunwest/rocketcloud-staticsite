console.log('hello world!');

fetch('http://localhost:3001/main/food', { mode: 'cors'})
  .then((response) => response.text())
  .then((text) => console.log(text));
console.log('hello world!');

const foodList = document.querySelector('#food-list');

fetch('http://localhost:3000/main/food', { mode: 'cors'})
  .then((response) => response.json())
  .then((food) => food.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    foodList.appendChild(li);
  }));
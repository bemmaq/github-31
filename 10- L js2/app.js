
const cards = document.querySelector(".cards");
const inputEl = document.querySelector("input");
const tamga=document.querySelector('.tamga')
const btns=document.querySelectorAll('button')
const apiURL='https://www.themealdb.com/api/json/v1/1/search.php?f='
const searchUrl = "https://www.themealdb.com/api/json/v1/1/search.php";
const lookupUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php";
const foto='https://www.themealdb.com/images/ingredients/'
const url='https://www.themealdb.com/api/json/v1/1/search.php?f='





async function getMealsByLetter(letter) {
  const res = await fetch(`${searchUrl}?f=${letter}`);
  const data = await res.json();
  showMeals(data.meals);
} 

async function getMealsByName(name) {
  const res = await fetch(`${searchUrl}?s=${name}`);
  const data = await res.json();
  renMeals(data.meals);
}

async function getDetailMeal(id) {
  const res = await fetch(`${lookupUrl}?i=${id}`);
  const data = await res.json();
  showDetailMeal(data.meals);
}

function showMeals(arr) {
  cards.innerHTML = "";
  for (const meal of arr) {
    cards.innerHTML += `
      <div class='card' onclick='getDetailMeal("${meal.idMeal}")'>
        <img src='${meal.strMealThumb}' />
        <h3>${meal.strMeal}</h3>
      </div>`;
  }
}

function renMeals(arr) {
  cards.innerHTML = "";
  for (const meal of arr) {
    cards.innerHTML += `
      <div class='card' onclick='getDetailMeal("${meal.idMeal}")'>
        <h5>${meal.strMeal}</h5>
        <img src='${meal.strMealThumb}' />
      </div>`;
  }
}

function showDetailMeal(meals) {
  cards.innerHTML = "";
  for (const meal of meals) {
    cards.innerHTML += `
      <div>
        <h1>${meal.strMeal}</h1>
        <img  src='${meal.strMealThumb}'width='300px' />
        
        <h2>Ingredients</h2>
        <ul>
          ${listIngredients(meal)}
        </ul>
        </div>`;
  }
}
      
        


function listIngredients(meal) {
  let ingredients = "";
  for (let i = 1; i <= 10; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients += `<h3>${measure} <br>  ${ingredient}</h3><br>
      
      <img src ='https://www.themealdb.com/images/ingredients/${ingredient}-Small.png' />
      
      
      `;
    }
  }
  return ingredients;
}


getMealsByLetter('b');

inputEl.onchange = async () => {
  const input = inputEl.value.trim();
  if (input) {
    await getMealsByName(input);
  } else {
    
    getMealsByLetter('b');
  }
};


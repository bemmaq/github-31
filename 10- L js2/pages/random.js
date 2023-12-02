const btn = document.querySelector('button')
const card = document.querySelector('.card')

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

async function getrandomMeals() {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.meals);
    showrandomMeals(data.meals)
}

function showrandomMeals(array) {
    card.innerHTML = ''
    for (const meal of array) {
        card.innerHTML += `<h1>${meal.strMeal}
        <h5><img width='45%' src=${meal.strMealThumb} />`
    }
}

btn.onclick = () => {
    getrandomMeals()
}
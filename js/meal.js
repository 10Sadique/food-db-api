const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container')
    mealsContainer.innerHTML = ``
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.innerHTML = `
            <div class="bg-zinc-700 rounded-lg shadow-lg shadow-zinc-700/30">
                <div>
                    <img class="rounded-t-lg" src="${meal.strMealThumb}" />
                </div>
                <div class="h-[300px] p-3 md:p-5 flex flex-col justify-between">
                    <div class="space-y-3">
                        <h2 class="text-lg font-semibold">${meal.strMeal} </h2>

                        <p><span class="font-semibold underline">Instructions</span>: ${meal.strInstructions.slice(0, 210)}</p>
                    </div>

                    <a href="${meal.strYoutube}" class="text-center py-2 px-5 bg-red-600 rounded-lg shadow-lg shadow-red-600/50 hover:bg-red-500 transition-all duration-300" target="_blank">Youtube Video</a>
                </div>
            </div>
        `
        mealsContainer.appendChild(mealDiv)
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchFieldText = searchField.value 

    const mealsContainer = document.getElementById('meal-container')

    loadMeals(searchFieldText)

    searchField.value = ''
}

loadMeals('a')
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
            <div  class="bg-zinc-700 rounded-lg shadow-lg shadow-zinc-700/30">
                <div>
                    <img class="rounded-t-lg" src="${meal.strMealThumb}" />
                </div>
                <div class="p-3 md:p-5 flex flex-col justify-between gap-4">
                    <div class="text-center">
                        <h2 class="text-lg font-semibold">${meal.strMeal} </h2>
                    </div>

                    <a onclick="loadMealDetails(${meal.idMeal})" class="text-center py-2 px-5 bg-red-600 rounded-lg shadow-lg shadow-red-600/50 hover:bg-red-500 transition-all duration-300 cursor-pointer" target="_blank">Show More &rarr;</a>
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

const loadMealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const detailContainer = document.getElementById('detail-container')
    detailContainer.innerHTML = ``
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
    
    
    
}

const displayMealDetails = meal => {
    console.log(meal)
    const detailContainer = document.getElementById('detail-container')
    const detailDiv = document.createElement('div')

    detailDiv.innerHTML = `
        <div class="bg-zinc-700 rounded-lg shadow-lg shadow-zinc-700/30">
            <div>
                <img class="rounded-t-lg" src="${meal.strMealThumb}" />
            </div>
                <div class="p-3 md:p-5 flex flex-col justify-between items-start">
                    <div class="mb-5">
                        <h2 class="text-lg text-center mb-5 font-semibold">${meal.strMeal} </h2>

                        <p><span class="font-semibold underline">Instructions</span>: ${meal.strInstructions.slice(0, 210)}</p>
                    </div>

                    <a href="${meal.strYoutube}" class="text-center py-2 px-5 bg-red-600 rounded-lg shadow-lg shadow-red-600/50 hover:bg-red-500 transition-all duration-300 self-stretch" target="_blank">Youtube Video</a>
                </div>
        </div>
`

    detailContainer.appendChild(detailDiv)

}


loadMeals('')
async function fetchCategories() {
    const url = 'https://aliexpress-datahub.p.rapidapi.com/category_list_1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '04ec1e9cdamshd851817c97dc8cbp1e59a3jsn5cac33528b83',
            'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.result.resultList;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

function renderCategories(categories) {
    const categoriesList = document.getElementById('categories-container');
    categoriesList.innerHTML = ''; // Clearing previous content

    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category.name;
        categoriesList.appendChild(li);
    });
}



// Attach event listener to a button
document.getElementById('fetch-categories-btn').addEventListener('click', async () => {
    try {
        const categories = await fetchCategories();
        renderCategories(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
});

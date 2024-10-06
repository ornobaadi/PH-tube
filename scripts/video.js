// Show categories 

// Create loadCategories 
const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
};


// {
    //     category_id: "1001"
    //     category: "Music"
// }



// Create displayCategories 
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach((item) => {
        console.log(item)
        // create a button 
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // Add button to category container
        categoryContainer.append(button);
    })
}

loadCategories()
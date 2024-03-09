const categoriesItem = document.querySelectorAll(" .item") 
console.log('Number of categories:', categoriesItem.length);

categoriesItem.forEach(item => {

    const headerElement = item.querySelector("h2");

    const allElements = item.querySelectorAll("li")

    console.log("Category:", headerElement.innerHTML);
    console.log("Elements:", allElements.length);
});


import '../styles/main.scss';
import { recipes } from './data';

function createRecipeCard(imageUrl, title, author, ingredients) {
    return `
        <div class="card">
          <div class="image" style="background-image: url('${imageUrl}')"></div>
          <div class="wrapper">
            <div class="title">${title}</div>
            <div class="author">${author}</div>
            <hr/>
            <div class="ingredients">${ingredients}</div>
          </div>
        </div>
    `;
}

Object.values(recipes).forEach(category => {
    category.forEach(recipe => {
        const type = recipe.type;
        const author = recipe.author;
        const title = recipe.title;
        const ingredients = recipe.ingredients.join(', ');
        const imageUrl = recipe.image;
        const element = document.createElement('div');
        element.innerHTML = createRecipeCard(imageUrl, title, author, ingredients);
        document.getElementById(type).append(element);
    })
});

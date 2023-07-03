# FOODMATCH:

## Overview
The Recipe Search App is a mobile application built with React Native. It allows users to search for recipes based on selected categories, cooking time range, and ingredients. The app provides a user-friendly interface to input search parameters, display search results, and view recipe details.

## Architecture
The app follows a component-based architecture, utilizing reusable UI components and screens to create the user interface. The main components and screens are as follows:

## Components
The Recipe Search App includes the following main components:

- Ingredient: A reusable component that represents an ingredient in the ingredient list. It displays the ingredient name and a delete button to remove the ingredient from the list.
- CategoryButton: A reusable component for selecting the category and pass the value to the next screen with rout.params

## Screens
The Recipe Search App includes the following screens:

- Categories: This screen displays a list of recipe categories. Users can select a category of interest to search for recipes.
- TimeSlider: This screen allows users to set the cooking time range using a slider.
- AddIngredients: This screen allows users to add ingredients for the recipe search. Users can enter ingredient names and view the list of added ingredients.
- Results: This screen displays the search results based on the selected category, cooking time range, and ingredients. It shows a list of recipes that match the search criteria.
- Recipe: This screen displays the details of a selected recipe. It shows the recipe title, cooking time, ingredients, and instructions.

## API Integration
The Recipe Search App integrates with the Spoonacular API to fetch recipe data. The getResults function in the AddIngredients component sends a GET request to the https://api.spoonacular.com/recipes/complexSearch endpoint to retrieve recipe search results.

The following parameters are included in the request:

- number: Specifies the maximum number of results to return.
- type: Specifies the recipe type/category.
- includeIngredients: Specifies the ingredients to include in the search.
- maxReadyTime: Specifies the maximum cooking time for the recipes.
- apiKey: Specifies the API key required for authentication.
- sort: Specifies the sorting order for the search results.
The API response contains an array of recipe objects, each containing information such as the recipe title and the image. The Results screen then displays the retrieved recipes.

If the API request is successful, the user is navigated to the Results screen with the retrieved recipes. In case of an error or no matching recipes, an appropriate message is displayed.

Another API request is made to fetch recipe informations using https://api.spoonacular.com/recipes/${recipe.id}/information.

If the API request is successful, the user is navigated to the Recipe screen where he can have access to the recipe's cooking time, ingredients and instructions.




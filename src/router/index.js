import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";

const routes = [
  {
    path: "/",
    componenet: DefaultLayout,
    children: [
      {
        path: "/recipe-app-vue/",
        name: "home",
        component: Home,
      },
      {
        path: "/recipe-app-vue/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/recipe-app-vue/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/recipe-app-vue/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/recipe-app-vue/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/recipe-app-vue/recipe/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

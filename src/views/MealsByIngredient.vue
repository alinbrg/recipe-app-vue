<template>
  <section class="max-w-[1024px] mx-auto pt-8 p-5">
    <h1 class="font-bold text-4xl text-purple-700 mb-5">
      Recipes with {{ ingredient.strIngredient }}
    </h1>
    <Meals :meals="meals" />
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";
const route = useRoute();

const meals = computed(() => store.state.mealsByIngredient);

const ingredient = computed(() => store.state.ingredient);
onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

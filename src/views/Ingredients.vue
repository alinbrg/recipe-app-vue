<template>
  <section class="max-w-[1024px] mx-auto pt-8 p-5">
    <hgroup class="mb-7">
      <h1 class="text-4xl font-bold text-purple-700">Ingredients</h1>
      <p class="text-sm mt-2 text-purple-500">
        click on ingredient to see recipes
      </p>
    </hgroup>
    <div class="mb-5">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-purple-300 bg-white w-full"
        placeholder="Search for Ingredients"
      />
    </div>

    <a
      href="#"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      @click.prevent="openIngredient(ingredient)"
      class="bg-white rounded p-3 mb-3 shadow block hover:shadow-xl transition-all"
    >
      <h3 class="text-2xl font-bold mb-2">
        {{ ingredient.strIngredient }}
      </h3>
      <p>
        {{ ingredient.strDescription }}
      </p>
    </a>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import axiosClient from "../axiosClient";
import store from "../store";

const keyword = ref("");
const ingredients = ref([]);
const router = useRouter();
const computedIngredients = computed(() =>
  ingredients.value.filter((ing) =>
    ing.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
);

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}
onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

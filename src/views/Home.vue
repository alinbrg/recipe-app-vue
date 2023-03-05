<template>
  <section class="max-w-[1024px] mx-auto p-5">
    <h1 class="text-4xl font-bold text-purple-500 mb-5">Random Recipes</h1>

    <Meals :meals="meals" />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";

import axiosClient from "../axiosClient";

const meals = ref([]);

onMounted(async () => {
  for (let index = 0; index < 10; index++) {
    axiosClient
      .get("/random.php")
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>

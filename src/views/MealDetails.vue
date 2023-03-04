<template>
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img
      class="w-full object-cover"
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-lg py-2">
      <div><span class="font-bold">Category:</span> {{ meal.strCategory }}</div>
      <div><span class="font-bold">Area:</span> {{ meal.strArea }}</div>
      <div><span class="font-bold">Tags:</span> {{ meal.strTags }}</div>
    </div>

    <table class="border-collapse border border-slate-500 mx-auto">
      <thead>
        <tr>
          <th class="border border-slate-600 bg-zinc-400 p-3">Ingredients</th>
          <th class="border p-3 border-slate-600 bg-zinc-400">Measures</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, i) of new Array(20)" :key="i">
          <td
            class="border border-slate-700 p-3 bg-zinc-200"
            v-if="meal[`strIngredient${i + 1}`]"
          >
            {{ meal[`strIngredient${i + 1}`] }}
          </td>
          <td
            class="border border-slate-700 p-3 bg-zinc-200"
            v-if="meal[`strMeasure${i + 1}`]"
          >
            {{ meal[`strMeasure${i + 1}`] }}
          </td>
        </tr>
      </tbody>
    </table>
    <p class="my-5">
      {{ meal.strInstructions }}
    </p>
    <div class="flex flex-wrap gap-3">
      <YouTubeButton :href="meal.strYoutube">See on YouTube</YouTubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 rounded inline-flex border-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
        >View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouYubeButton.vue";
const route = useRoute();

const meal = ref({});
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

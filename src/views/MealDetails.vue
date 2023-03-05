<template>
  <section class="max-w-[1024px] mx-auto p-5">
    <h1 class="text-5xl font-bold mb-5 text-purple-700">{{ meal.strMeal }}</h1>
    <img
      class="w-full object-cover"
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-lg py-2">
      <div><span class="font-bold">Category:</span> {{ meal.strCategory }}</div>
      <div><span class="font-bold">Area:</span> {{ meal.strArea }}</div>
      <div>
        <span class="font-bold">Tags:</span>
        {{ meal.strTags?.split(",")?.join(", ") }}
      </div>
    </div>

    <table
      class="border-collapse border border-purple-500 mx-auto w-full max-w-2xl mt-4"
    >
      <thead>
        <tr>
          <th class="border border-purple-600 bg-purple-400 p-3">
            Ingredients
          </th>
          <th class="border p-3 border-purple-600 bg-purple-400">Measures</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, i) of new Array(20)" :key="i">
          <td
            class="border border-purple-700 p-3 bg-purple-200"
            v-if="meal[`strIngredient${i + 1}`]"
          >
            {{ meal[`strIngredient${i + 1}`] }}
          </td>
          <td
            class="border border-purple-700 p-3 bg-purple-200"
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
      <YouTubeButton v-if="meal.strYoutube" :href="meal.strYoutube"
        >See on YouTube</YouTubeButton
      >
      <SeeMoreButton
        v-if="meal.strSource"
        :href="meal.strSource"
        text="View Original Source"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouYubeButton.vue";
import SeeMoreButton from "../components/SeeMoreButton.vue";
const route = useRoute();

const meal = ref({});
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

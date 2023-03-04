<template>
  <div class="bg-white shadow rounded">
    <router-link
      :to="{
        name: 'mealDetails',
        params: {
          id: meal.idMeal,
        },
      }"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t h-48 w-full object-cover"
      />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">{{ meal.strInstructions.substring(0, 100) }}...</p>

      <div class="flex gap-3">
        <YouTubeButton :href="meal.strYoutube" />
        <router-link
          :to="{
            name: 'mealDetails',
            params: {
              id: meal.idMeal,
            },
          }"
          class="px-3 py-2 rounded inline-flex border-2 bg-emerald-600 hover:bg-emerald-700 border-transparent text-white transition-colors"
          >See More Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "../components/YouYubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>

<style></style>

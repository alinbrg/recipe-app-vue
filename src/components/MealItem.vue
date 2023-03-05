<template>
  <div class="bg-white shadow rounded-xl hover:shadow-xl transition-all">
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
        class="rounded-t-xl h-48 w-full object-cover"
      />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold mb-3">{{ meal.strMeal }}</h3>
      <p v-if="meal.strInstructions" class="mb-4">
        {{
          meal.strInstructions.length > 100
            ? meal.strInstructions.substring(0, 100) + "..."
            : meal.strInstructions
        }}
      </p>

      <div class="flex gap-3 flex-wrap">
        <YouTubeButton v-if="meal.strYoutube" :href="meal.strYoutube" />
        <router-link
          :to="{
            name: 'mealDetails',
            params: {
              id: meal.idMeal,
            },
          }"
          class="px-3 py-2 rounded inline-flex border-2 bg-purple-400 hover:bg-purple-500 border-transparent hover:text-white transition-colors"
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

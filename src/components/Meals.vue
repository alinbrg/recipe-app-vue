<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="text-center text-gray-600 pb-20">
    There are no meals
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>

<style></style>

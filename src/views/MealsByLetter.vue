<template>
  <section class="max-w-[1024px] mx-auto p-5">
    <div class="flex gap-4 justify-center flex-wrap mb-8">
      <router-link
        v-for="letter of letters"
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
        class="hover:text-purple-900 hover:scale-150 transition-all font-semibold"
      >
        {{ letter }}
      </router-link>
    </div>
    <Meals :meals="meals" />
  </section>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMONPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<template>
  <section class="max-w-[1024px] mx-auto p-5">
    <div class="pt-5 pb-8">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-purple-300 bg-white w-full"
        placeholder="Search for Meals"
        @change="searchMeals"
      />
    </div>

    <Meals :meals="meals" />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { computed } from "@vue/reactivity";
import store from "../store";
import Meals from "../components/Meals.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
    />

    <div class="flex gap-2 mt-2 justify-center flex-wrap">
      <router-link
        v-for="letter of letters"
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import store from "../store";
import axiosClient from "../axiosClient";

const letters = "ABCDEFGHIJKLMONPQRSTUVWXYZ".split("");

const ingredients = ref([]);

onMounted(async () => {
  const res = await axiosClient.get("/list.php?i=list");

  console.log(res.data);
  ingredients.value = res.data;
});
</script>

<template>
  <section>
    <div class="flex flex-col p-8"></div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import store from "../store";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(async () => {
  const res = await axiosClient.get("/list.php?i=list");

  ingredients.value = res.data;
});
</script>

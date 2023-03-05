<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded inline-flex border-2 bg-purple-400 hover:bg-purple-500 border-transparent hover:text-white transition-all"
  >
    {{ text }}
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
  text: String,
});
</script>

<style></style>

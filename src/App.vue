<script setup>
import AppHeader from "@/components/AppHeader.vue";
import {usePersistWishlist} from "@/composables/usePersistWishlist";
import {onMounted} from "vue";

usePersistWishlist()
onMounted(() => {
  console.log("No errors here! ❤️")
})
</script>

<template>
  <AppHeader/>
  <div class="container mx-auto my-4">
    <router-view/>
  </div>
</template>